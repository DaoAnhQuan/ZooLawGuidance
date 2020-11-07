import './App.css';
import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import { Router,Switch,Route, Link } from 'react-router-dom';
import { Layout, Menu, Modal } from 'antd';
import Introduction from './components/Introduction' 
import SpeciesList from './components/SpeciesList'
import SubMenu from 'antd/lib/menu/SubMenu';
import Advertisement from './components/Advertisement'
import AdvertisementPreview from './components/AdvertisementPreview'
import SpeciesPreview from './components/SpeciesPreview'
const { Header, Content, Footer } = Layout;

const history = createBrowserHistory();
class App extends Component {
  render(){
    return (
      <Router history = {history}>
          <Layout style={{backgroundImage:'url(https://www.itourvn.com/images/easyblog_images/exotic_animals/Indian_Elephant.jpg)', minHeight:'100vh'}}>
            <Header>
              <div className="logo"></div>
              <Menu theme="dark"  mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                  <Link to="/">Giới thiệu</Link>
                </Menu.Item>
                <SubMenu key="2" title="Hướng dẫn xử lý vi phạm">
                  <Menu.Item>
                    <Link to="/huongdan">Liên quan đến quảng cáo bán ĐVHD trái phép</Link>
                  </Menu.Item>
                </SubMenu>
                <Menu.Item key="3">
                  <Link to="/loai">Danh mục loài</Link>
                </Menu.Item>
              </Menu>
            </Header>
            <Content style={{ padding: '0 50px', marginTop:'20px' }}>
              <Switch>
                <Route exact path="/">
                  <Introduction/>
                </Route>
                <Route path="/huongdan">
                  <Advertisement/>
                </Route>
                <Route path="/loai">
                  <SpeciesList/>
                </Route>
                <Route path="/adpreview">
                  <AdvertisementPreview/>
                </Route>
                <Route path="/speciespreview">
                  <SpeciesPreview/>
                </Route>
              </Switch>
            </Content>
            <Footer style={{ textAlign: 'center' }}>@ Created by Zootopia group</Footer>
          </Layout>
      </Router>
    );
  }
}

export default App;
