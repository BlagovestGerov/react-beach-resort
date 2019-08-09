import React, { Component } from 'react';
import Title from './Title';
import {FaCocktail, FaHiking,FaShuttleVan, FaBeer} from 'react-icons/fa';
import { isTemplateElement } from '@babel/types';

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:'free cocktails',
                info:"orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
            },
            {
                icon:<FaHiking/>,
                title:'Endless Hiking',
                info:"orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
            },
            {
                icon:<FaShuttleVan/>,
                title:'Free shuttle',
                info:"orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
            },
            {
                icon:<FaBeer/>,
                title:'Stringest Beer',
                info:"orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
            }
        ]
    }
    render() {
        return (
            <section className='services'>
              <Title title='services' />
              <div className='services-center'>  
                {this.state.services.map((item, index) => {
                    return <article key={index} className='service'>
                        <span>
                            {item.icon}
                        </span>
                        <h6>
                            {item.title}
                        </h6>
                        <p>
                            {item.info}
                        </p>
                    </article>
                })}
              </div>
            </section>
        )
    }
}
