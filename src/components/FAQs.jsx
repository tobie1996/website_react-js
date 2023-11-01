import SectionHeader from "./SectionHeader"
import {FaQuestion} from 'react-icons/fa'
import {faqs} from '../data'
import FAQ from "./FAQ"

const FAQs = () => {
  return (
    <return>
      <section className="faqs">
        <div className="container faqs_container">
          <SectionHeader icon={<FaQuestion/>} title="FAQs"/>
          <div className="faqs__wrapper">
            {faqs.map(({id,question, answer}) => {
                return <FAQ key={id} question={question} answer={answer}/>
            })}
          </div>
        </div>
      </section>
    </return>
  ) 
}

export default FAQs
