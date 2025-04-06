// src/App.tsx
import { useEffect, useState } from 'react';
import { CssBaseline, Container, CircularProgress, Alert } from '@mui/material';
import Layout from './components/layout/Layout';
import EducationChart from './components/charts/EducationChart';
import SalaryChart from './components/charts/SalaryChart';
import ExperienceChart from './components/charts/ExperienceChart';
import DataCard from './components/ui/DataCard';
import axios from 'axios';
import { 
  EducationDataItem, 
  SalaryDataItem, 
  ExperienceDataItem 
} from './types/data';

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [dashboardData, setDashboardData] = useState({
    education: [] as EducationDataItem[],
    salary: [] as SalaryDataItem[],
    experience: [] as ExperienceDataItem[]
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [educationRes, salaryRes, experienceRes] = await Promise.all([
          axios.get<EducationDataItem[]>('/api/csv/education-level'),
          axios.get<SalaryDataItem[]>('/api/csv/salary-data'),
          axios.get<ExperienceDataItem[]>('/api/csv/experience-data')
        ]);

        setDashboardData({
          education: educationRes.data,
          salary: salaryRes.data,
          experience: experienceRes.data
        });
      } catch (err) {
        setError('Failed to load dashboard data. Please try again later.');
        console.error('API Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <Layout>
        <Container sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
          <CircularProgress size={80} />
        </Container>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <Container sx={{ mt: 3 }}>
          <Alert severity="error">{error}</Alert>
        </Container>
      </Layout>
    );
  }

  return (
    <>
      <CssBaseline />
      <Layout>
        <Container maxWidth="xl" sx={{ py: 4 }}>
          <DataCard title="Hong Kong IT Job Market Dashboard">
            <EducationChart data={dashboardData.education} />
          </DataCard>

          <DataCard title="Salary Distribution Analysis">
            <SalaryChart data={dashboardData.salary} />
          </DataCard>

          <DataCard title="Experience Requirements">
            <ExperienceChart data={dashboardData.experience} />
          </DataCard>
        </Container>
      </Layout>
    </>
  );
}

export default App;