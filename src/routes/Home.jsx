import { HomeStyle } from "../Style/HomeStyle"


const Home = () => {
    return(
        <HomeStyle>
            <img src="./src/assets/Banner.jpg" alt="" />
            <div className="ma">
                <img className='marvel-logo' src="./src/assets/Marvel.jpg" alt="" />
                <div className="marvel">
                    <h1>Marvel</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quod nisi error soluta reprehenderit modi? Dolore veniam ratione natus eveniet consectetur ipsa pariatur laboriosam error quia quaerat, iste numquam aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, cum soluta maiores sed repellendus nemo commodi perferendis, necessitatibus, ea reprehenderit culpa odio ex incidunt tempora asperiores consectetur optio laboriosam doloremque. Lorem ipsum dolor sit amet consectetur adipisicing el</p>
                </div>
            </div>

            <div className="dc">
            
                <div className="DC">
                    <h1>DC</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quod nisi error soluta reprehenderit modi? Dolore veniam ratione natus eveniet consectetur ipsa pariatur laboriosam error quia quaerat, iste numquam aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, cum soluta maiores sed repellendus nemo commodi perferendis, necessitatibus, ea reprehenderit culpa odio ex incidunt tempora asperiores consectetur optio laboriosam doloremque. Lorem ipsum dolor sit amet consectetur adipisicing el</p>
                </div>
                <img className='DC-logo' src="./src/assets/DC.jpg" alt="" />
            </div>

        </HomeStyle>
    )
}

export default Home