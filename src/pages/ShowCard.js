import React from "react";
import Searchbar2 from "../components/Searchbar2";
import Card from "../components/Card.jsx";
import Cargando from '../components/Cargando';
import Malo from '../components/Malo';


 
import axios from "axios";



class ShowCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
        error: null,
        data: undefined,
    };
  }

  componentDidMount() {
    this.getData()
  }


  getData = async () => {
    try {
      const { data } = await axios.get('https://your-job.now.sh/worker')
      this.setState({ loading: false, data: data });
      // this.setState({
      //   data
      // })
    } catch (error) {
      this.setState({ loading: false, error: error });

    }

  }



  selectedSearchOption = (service) => {
    console.log(service);
    this.setState({ filter: service });
  };



  render() {

    if(this.state.loading === true && !this.state.data){
      return <Cargando />;
  }

  if(this.state.error){
      console.log(this.state.error);
      
        return <Malo error={this.state.error} />;
  }

    console.log(this.state)
    let fullData = this.state.data


    if (this.state.filter !== "") {
      fullData = this.state.data.filter(
        (item) => item.serviceType === this.state.filter
      )
    }


    return (
      <React.Fragment>
        
        
        <Searchbar2 handlChange={this.selectedSearchOption} />
        <Card
          info={fullData}
        />
      
      </React.Fragment>
    );
  }
}

export default ShowCard;
