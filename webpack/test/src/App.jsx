import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/home/home.jsx';
import Home2 from './components/home/home2.jsx';
class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <Router>
                <Switch>
                
                    {/* <Route ref='aa' exact path='/' component={AA} /> */}

                    <Route path='/home' component={Home} />
                    <Route path='/home2' component={Home2} />


                    {/* 重定向必须在路由之后 */}
                    <Redirect to='/home'/> 

                </Switch>
            </Router>
        )
    }
}
export default App;