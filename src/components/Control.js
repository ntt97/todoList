import React from 'react';

import Search from './Search'
import Sort from './Sort'
import TaskList from './TaskList'
class Control extends React.Component {
    render() {
        return (
            <div>
                <div className="row mt-15">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            {/*Search*/}
                            <Search />
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            {/*Sort*/}
                            <Sort />
                    </div>
                </div>


                <div className="row mt-15">
                   {/*Task list*/}
                   <TaskList />
                </div>
            </div>
        );
    }
}
export default Control;