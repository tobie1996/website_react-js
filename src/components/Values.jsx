import Image from '../images/values.jpg'
import SectionHeader from './SectionHeader'
import {GiCutDiamond} from 'react-icons/gi'
import { values } from '../data'
import Card from '../IU/Card'

const Values = () => {
  return (
    <section className='values'>
      <div className='container values__container'>
        <div className='values__left'>
            <div className='values__image'>
                <img src={Image} alt="Values Images"/>
            </div>
        </div>
        <div className='values__right'>
            <SectionHeader icon={<GiCutDiamond/>} title="Values"/>
             <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed nisi vitae est posuere 
             </p>
             <div className='values__wrapper'>
                {
                    values.map(({id, icon,title,desc}) => {
                        return <Card key={id} className="values__value">
                            <span>{icon}</span>
                            <h4>{title}</h4>
                            <small>{desc}</small>
                        </Card>
                    })
                }
             </div>  
           
        </div>
      </div>
    </section>
  )
}

export default Values
