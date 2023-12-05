import React,{useEffect} from 'react';
import '../index.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import fetchProjects from '../redux/project/projectActions';
import {connect, useDispatch} from 'react-redux'

const Project=({loading,projects,errorMessage,fetchProjects})=>{
    useEffect( ()=>{
        fetchProjects();
      },[useDispatch]);
      
      if(loading){
        return <h2>در حال بارگذاری ....</h2>
     }
     if(errorMessage){
        return <p>error: {errorMessage}</p>
     }
     
    return(
        <section className='projects-wrapper'>
        <div className='projects-title'>
          <h3>پروژه ها</h3>
          <p className='projects-title-p'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
        </div>
        <section className='projects-slider'>
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="mySwiper mySwiper-container" >
         {
            projects.map(project=>{
             return(
                <SwiperSlide className='mySwiper-content' key={project.id}>
                    <div><img src={project.img} alt={project.title}/></div>
                    <h5>{project.title}</h5>
                </SwiperSlide>
             )
            })
        }
        
      </Swiper>
        </section>
           
        </section>
    )
}
const mapStateToProps=state =>(
    {
        loading:state.loading,
        projects:state.projects,
        errorMessage:state.errorMessage
    }
)



export default  connect(mapStateToProps,{fetchProjects})(Project);