import './App.css';
import React, { Component } from 'react';

class App extends Component {
  
  state = {
    show: false,
    person: {
      fullName: 'Ben Hmida Wael',
      bio: 'hi there !',
      imgSrc: 'https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/312504686_1772189743138813_5419760853891857225_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=9_UB8nzhh24AX8tFReN&_nc_ht=scontent.ftun16-1.fna&oh=00_AfAc2kZVegNXWNuyMb1NlpHsprQ17aIv8R3latvsBB-4Dw&oe=63E8792D',
      profession: 'Students',
    },
    time: 0,
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({ time: prevState.time + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleShow = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    const { show, person, time } = this.state;

    return (
      <div className="App">
      <header className="App-header">
        <button  onClick={this.toggleShow} style={{
                    backgroundColor: '#7286D3',
                    border:'none',
                    color: 'white',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    marginTop:'20px',
                    cursor: 'pointer',
                }}>Show Profile</button>
        {show && (
          <div>
            <h1>{person.fullName}</h1>
            <img src={person.imgSrc} alt={person.fullName} style={{width:350,height:350,borderRadius:'50%', border:" 2px solid #2980B9",boxShadow: "0px 0px 10px 0px #2980B9"}}/>
            <p>{person.bio}</p>
            <p>{person.profession}</p>
          </div>
        )}
        <p>Time since component mounted: {time}s</p>
        </header>
      </div>
    );
  }
}

export default App;
