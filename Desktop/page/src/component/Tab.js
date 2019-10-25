import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';


const tagName = ({tags}) => {
  return(
    function callback(key) {
      console.log(key);
    }

    ReactDOM.render(
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab=Tabs key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </TabPane>
      </Tabs>,
      document.getElementById('container'),
    );
  )
}





export default Tab;