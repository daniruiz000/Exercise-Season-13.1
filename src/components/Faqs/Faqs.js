import { useParams } from "react-router-dom";

const faqs = [
    {
        question: '¿Cómo puedo llegar a casa?',
        answer: 'Haciendo dedo'
    },
    {
        question: '¿Cuánto vale ir en bus?',
        answer: 'No tienes pasta, estás pelao'
    },
    {
        question: '¿Donde está la parada de autobus?',
        answer: 'Cerca de la huerta del tío Manolo'
    },
]

const Faqs = () => {
    console.log('Renderizo Faqs')
    const { id } = useParams()

    return (

        <div className="page">
            <h1>Faqs</h1>

            {
                faqs[id] ?
                    <div className="faq">
                        <p className="question"><strong>{faqs[id].question}</strong></p>
                        <p className="answer">{faqs[id].answer}</p>
                    </div>
                    : <p>No tengo esa pregunta, prueba otro número</p>
            }

        </div>
    )
}

export default Faqs;