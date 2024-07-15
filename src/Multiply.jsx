// import images from './images/5.jpg'
import images from './images/5.jpg'


function Multiply({u_photo,u_name, p_date,p_contect}) {
  return (
    <div className="box">
        <div className="user_info">
            <div className="user-phot">
              <img src={u_photo} width="50px" height="50px" />

            </div>
            <div className="user_name-date">
                <span className='FullName'>{u_name}</span> <br /> 
                <span className='PostDate'>{p_date}</span>

            </div>

        </div>
        <div className="contect">
            <p>{p_contect}</p>

        </div>
      
    </div>
  )
}

export default Multiply
