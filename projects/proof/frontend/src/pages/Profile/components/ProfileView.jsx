import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import ProfileInfo from '../components/ProfileInfo';
import MasterLayout from '../../../layouts/MasterLayout';
import LoadingScreen from '../../../components/LoadingScreen';

const styles = {
  containerHeight: {
    height: '100%',
  },
  imgAlign: {
    textAlign: 'center',
  },
  fieldStyle: {
    marginTop: '20px',
  },
};

const normalize = data => (data != null ? data : null);

const ProfileView = props => (
  <MasterLayout>
    {
          props.isLoading && <LoadingScreen />
    }
    <Grid container className="centered-container">
      <Card className="profile-container">
        <CardContent className="no-padding" style={styles.containerHeight}>
          {
              !props.isLoading
              &&
              <Grid container spacing={24} style={styles.containerHeight}>
                <Grid item xs={7} className="image-side center-container-content">
                  <div style={styles.imgAlign}>
                    <img alt="Profile avatar" src={props.image} />
                    <h2>{`${normalize(props.surname)}'s profile`}</h2>
                  </div>
                </Grid>
                <Grid item xs={5} className="profile-description-side">
                  <div style={styles.fieldStyle}>
                    <ProfileInfo
                      value={`${normalize(props.name)} ${normalize(props.surname)}`}
                      title="Name"
                    />
                  </div>
                  <div style={styles.fieldStyle}>
                    <ProfileInfo
                      value={normalize(props.email)}
                      title="Email"
                    />
                  </div>
                </Grid>
              </Grid>
          }
        </CardContent>
      </Card>
    </Grid>
  </MasterLayout>
);

ProfileView.propTypes = {
  isLoading: PropTypes.bool,
  image: PropTypes.string,
  name: PropTypes.string,
  surname: PropTypes.string,
  email: PropTypes.string,
};

ProfileView.defaultProps = {
  isLoading: false,
  image: '',
  name: '',
  surname: '',
  email: '',
};

export default ProfileView;
