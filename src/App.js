import React from 'react';
import './App.css';

import Header from './components/Header'
import TaskForm from './components/TaskForm'
import Control from './components/Control'
class App extends React.Component {
    render() {
        return (
            <div className="container">
               {/*Header*/}
               <Header />
                <div className="row">
                    {/*TaskForm */}
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                       <TaskForm />
                    </div>
                        {/*Control*/}
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <button type="button" className="btn btn-primary">
                            <span className="fa fa-plus mr-5" />Thêm Công Việc
                        </button>
                        <Control />

                    </div>
                </div>
            </div>
        );
    }

}

export default App;
