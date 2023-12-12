import React from 'react'
import DefaultLayout from '../components/Defaultlayout'
import t1 from '../images/template/t1.png'
import t2 from '../images/template/t2.png'
import t3 from '../images/template/t3.png'
import t4 from '../images/template/t4.png'
import t5 from '../images/template/t5.png'
import t6 from '../images/template/t6.png'
import t7 from '../images/template/t7.png'
import t8 from '../images/template/t8.png'
import '../resources/maintemplate.css'
import { useNavigate } from 'react-router-dom'

const Maintemplate = () => {
  const navigate = useNavigate()
  const templating = [
    {
      title: "Resume Template 1",
      image: t1
    },
    {
      title: "Resume Template 2",
      image: t2
    },
    {
      title: "Resume Template 3",
      image: t3
    },
    {
      title: "Resume Template 4",
      image: t4
    },{
      title: "Resume Template 5",
      image: t5
    },{
      title: "Resume Template 6",
      image: t6
    },{
      title: "Resume Template 7",
      image: t7
    },
    {
      title: "Resume Template 8",
      image: t8
    },
    
  ]
  return (
    <DefaultLayout>
      <div className='row home'>
        {templating.map((tem, index) => {
          return <div className='col-md-4'>
            <div className='template'>
              <img src={tem.image}/>
              <div id='text'>
                <p>{tem.title}</p>
                <button id='temBtn' onClick={()=>{
                  navigate(`/template/${index + 1}`)
                }}>Try</button>
              </div>

            </div>

          </div>
        })}
      </div>
    </DefaultLayout>
  )
}

export default Maintemplate