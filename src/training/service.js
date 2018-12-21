import axios from 'axios';

const trainingServiceFactory = () => (
  {
    getTraining: patientId => (
      axios.get(`/patients/${patientId}/training`, {
        headers: {
          Accept: 'application/json',
        },
      }).then(response => (
        response.data.training
      ))
    ),
  }
);

export default trainingServiceFactory();
