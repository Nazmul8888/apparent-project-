
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth/useAuth";
import useAxiosPublic from "../../Hooks/useAuth/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {googleSignIn} = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();


    const handelGoogleSignIn = ()=>{
        googleSignIn()
        .then(result=>{
            console.log(result.user)
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users',userInfo)
            .then(res=>{
                console.log(res.data)
                navigate('/')
                
            })
        })
    }
    return (
        <div className="p-8">
              <div className="divider"></div> 
            <button onClick={handelGoogleSignIn} className="btn">
            <FcGoogle className="mr-4" />
            </button>
        </div>
    );
};

export default SocialLogin;