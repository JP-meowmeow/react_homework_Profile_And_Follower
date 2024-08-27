
// challenge บอกอายุ เป็น  _ปี _เดือน _วัน

function App() {
    const style3 = {
        backgroundColor: '#ccf3ff',
        border : '2px solid grey',
        borderRadius:'20px'
    }
    const style4={
        backgroundColor:'whitesmoke',
        margin : '20px',
        borderRadius:'20px'
    }
    return (
        <div style = {style3}>
            <div className="details" style = {style4}>
            <Profile/>
            <Status/>
            </div>
        </div>
    )
}



ReactDOM.createRoot(document.querySelector('#root')).render(<App />)

function Profile(){
    const style1 = {
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        gap:'0px',
        padding:'30px 10px 0px 10px'
    }
    return (
        <div className="profileName" style={style1}>
        <img src="https://images.unsplash.com/photo-1579463148228-138296ac3b98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" alt="" style={{
            width:'120px',
            borderRadius:'50%'
        }}/>

        <h1 style={{
            margin :'0px',
            marginTop:'10px'
        }}>Julienne Moore</h1>
        <p style={{
            margin :'0px'
        }}>julianne.moore@company.com</p>
        </div>
    )
}

function Status(){
    const style2={
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        gap:'80px',
        margin:'0px'
    }
    return(
        <div className="details" style={style2}>
            <div className="posts" style={{
                textAlign : 'center'
            }}>
                <h1>25</h1>
                <p>Posts</p>
            </div>
            <div className="following" style={{
                textAlign : 'center'
            }}>
                <h1>350</h1>
                <p>Following</p>
            </div>
            <div className="followers" style={{
                textAlign : 'center'
            }}>
                <h1>1.5K</h1>
                <p>Followers</p>
            </div>
        </div>
    )
}