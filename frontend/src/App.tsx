import { useEffect, useState } from 'react';
import { CssBaseline, Container, CircularProgress, Alert, Card, CardContent, Typography, Avatar, Box } from '@mui/material';
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
        {/* Main Background with a Blue Gradient */}
        <Container maxWidth={false} sx={{ 
          py: 6, px: 3, 
          background: 'linear-gradient(45deg, #2196f3, #42a5f5)',  // Blue Gradient background
          borderRadius: 2,
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        }}> 
          {/* Group Information Section with Blue Gradient */}
          <Card sx={{
            mb: 6, 
            background: 'linear-gradient(45deg, #2196f3, #42a5f5)',  // Blue Gradient for the Group Card
            color: 'white',
            padding: 3, 
            borderRadius: 2,
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
            '&:hover': {
              transform: 'scale(1.02)',
              transition: 'transform 0.3s ease',
              boxShadow: '0 6px 15px rgba(0, 0, 0, 0.3)'
            }
          }}>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                Group 9 - Team Members
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar sx={{ mr: 2, bgcolor: '#1e88e5' }} />  {/* Blue Avatar */}
                  <Typography variant="body1" sx={{ fontWeight: '500' }}>Nurgazy Alikhan - 22201009</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar sx={{ mr: 2, bgcolor: '#e57373' }} />  {/* Red Avatar */}
                  <Typography variant="body1" sx={{ fontWeight: '500' }}>Ruslan Sheikh - 22204016</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar sx={{ mr: 2, bgcolor: '#ffb74d' }} />  {/* Orange Avatar */}
                  <Typography variant="body1" sx={{ fontWeight: '500' }}>Juan Felix Pangestu - 23222727</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar sx={{ mr: 2, bgcolor: '#81c784' }} />  {/* Green Avatar */}
                  <Typography variant="body1" sx={{ fontWeight: '500' }}>Cheng Chau Ki - 22229345</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar sx={{ mr: 2, bgcolor: '#ba68c8' }} />  {/* Purple Avatar */}
                  <Typography variant="body1" sx={{ fontWeight: '500' }}>CHEN Xiaoqian - 22235272</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>

          {/* Dashboard Section */}
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
