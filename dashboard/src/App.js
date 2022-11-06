import './App.css';

import {useEffect} from 'react';
import {getFeedbackItems} from "./actions/feedbackItems";

import { Box, Container, Grid, Card, CardContent, Typography } from '@mui/material';

import {useDispatch} from 'react-redux';

import {SatisfactionScore} from './components/SatisfactionScore';


function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getFeedbackItems());
  },[dispatch]);

  return (
    <div className="App">


      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth={false}>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Grid
                    container
                    spacing={3}
                    sx={{ justifyContent: 'space-between' }}
                  >
                    <Grid item>
                      <Typography
                        color="textSecondary"
                        gutterBottom
                        variant="overline"
                      >
                        <h1>Overall satisfaction</h1>
                        <SatisfactionScore>
                          </SatisfactionScore>
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            <Grid
              item
              xl={3}
              lg={3}
              sm={6}
              xs={12}
            >
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Grid
                    container
                    spacing={3}
                    sx={{ justifyContent: 'space-between' }}
                  >
                    <Grid item>
                      <Typography
                        color="textSecondary"
                        gutterBottom
                        variant="overline"
                      >
                        <h1>Net Promoter Score</h1>
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            <Grid
              item
              xl={3}
              lg={3}
              sm={6}
              xs={12}
            >
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Grid
                    container
                    spacing={3}
                    sx={{ justifyContent: 'space-between' }}
                  >
                    <Grid item>
                      <Typography
                        color="textSecondary"
                        gutterBottom
                        variant="overline"
                      >
                        <h1>Feedback Ticket Status</h1>
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              xl={3}
              lg={3}
              sm={6}
              xs={12}
            >
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Grid
                    container
                    spacing={3}
                    sx={{ justifyContent: 'space-between' }}
                  >
                    <Grid item>
                      <Typography
                        color="textSecondary"
                        gutterBottom
                        variant="overline"
                      >
                        <h2>Satisfaction with Staff</h2>
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              lg={8}
              md={12}
              xl={9}
              xs={12}
            >
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Grid
                    container
                    spacing={3}
                    sx={{ justifyContent: 'space-between' }}
                  >
                    <Grid item>
                      <Typography
                        color="textSecondary"
                        gutterBottom
                        variant="overline"
                      >
                        <h2>Satisfaction with Hospitality</h2>
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              lg={4}
              md={6}
              xl={3}
              xs={12}
            >
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Grid
                    container
                    spacing={3}
                    sx={{ justifyContent: 'space-between' }}
                  >
                    <Grid item>
                      <Typography
                        color="textSecondary"
                        gutterBottom
                        variant="overline"
                      >
                        <h2>Satisfaction with Efficiency</h2>
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              lg={4}
              md={6}
              xl={3}
              xs={12}
            >
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Grid
                    container
                    spacing={3}
                    sx={{ justifyContent: 'space-between' }}
                  >
                    <Grid item>
                      <Typography
                        color="textSecondary"
                        gutterBottom
                        variant="overline"
                      >
                        <h2>Satisfaction with Value for Money</h2>
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

    </div>
  );
}

export default App;
