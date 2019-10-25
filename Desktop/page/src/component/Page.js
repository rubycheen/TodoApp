import React, { Component } from 'react';
import page from './page.css'
import Title from './Title'
import Context from './Context'
import Tab from './Tab'


class Page extends Component {

state = {

  Title: {
    'whatIsProduct': {
      content: '贋復美學是什麼？'
    },
    'howToChoose': {
      content: '牙冠材質怎麼選？'
    },
    'question':{
      content: '常見問題'
    },
    'consultation': {
      content: '門診諮詢'
    }
  },

  Context: {
    'paragraph1':{
      content: '贋復是指利用偽造的物品來恢復缺損的牙齒，也就是俗稱的「做假牙」。藉由人工取代品修復自然牙或取代缺損的牙齒及口腔顎面組織的連續性，以維持及恢復口腔功能、舒適、外觀及健康。'
    } ,
    'paragraph2':{
      content: '日亞美牙醫診所，除了維持牙齒的功能性，也講求於大眾對於美的追求，提供牙冠與牙齒貼片兩種服務。'
    },
    'paragraph3':{
      content: '牙冠就像全罩式安全帽，保護脆弱的牙齒，是用於修復牙齒的一種方法，除了能夠加固受損的牙齒外，可用於改善損壞牙齒的外觀、形狀或排列，當牙齒損壞後且難以通過補牙的方式修復時，用不同的材料製成人造牙冠，套在原本修小的天然牙冠上，類似牙齒的形狀，以及有利於功能的結構。'
    },
    'paragraph4':{
      content: '牙冠材質包含全瓷、半瓷半金屬，及全金屬，除了考量牙齒缺損狀況、材質強度外，也會因應美觀需求選擇不同的使用材料。該如何選擇適合自己的牙冠材質呢？'
    } 
  },

  Tab:{
    'crown':{content: '牙冠'},
    'veneer':{content: '牙齒貼片'}
  }

}

  render() {
    return (
      <>
        <Title content={this.state.Title.whatIsProduct.content} />
        <Context content={this.state.Context.paragraph1.content} />
        <Context content={this.state.Context.paragraph2.content} />
        <br></br>

        <div className='tabs'>
          <p>{this.state.Tab.crown.content}</p>
          <p>{this.state.Tab.veneer.content}</p>
        </div>

        <Context content={this.state.Context.paragraph3.content} />
        <br></br>
        <Title content={this.state.Title.howToChoose.content} />
        <Context content={this.state.Context.paragraph4.content} />
      </>
    );
  };
}


export default Page;