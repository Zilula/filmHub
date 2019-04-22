import { connect } from 'react-redux';
import Results from '../../components/results/Results';

const mapStateToProps = (state) => ({
  //selector
  results: fetchResultsSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetch() {
    //action
    dispatch(fetchResultsAction());
  }
});



export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Results);

