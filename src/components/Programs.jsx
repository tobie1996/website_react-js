import {FaCrown} from 'react-icons/fa'
import SectionHeader from './SectionHeader'
import {programs} from '../data'
import { Link } from 'react-router-dom'
import Card from '../IU/Card'
import { BiCaretRight } from 'react-icons/bi'




const Programs = () => {
  return (
    <section className="programs">
        <div className="container programs__container">
           <SectionHeader icon={<FaCrown />} title="Programs"/>
        </div>
        <div className='programs__wrapper'>
            {
                programs.map(({id, icon, title, info, path}) => {
                    return (
                        <Card className="programs__program" key={id}>
                            <span>{icon}</span>
                            <h4>{title}</h4>
                            <small>{info}</small>
                            <Link to={path} className="btn sm">Learn More <BiCaretRight/></Link>
                        </Card>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Programs