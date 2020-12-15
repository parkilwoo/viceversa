import React from 'react';
import ReactDOM from 'react-dom';
import './vics.css';
import video from './video/tree.mp4';
import logo from './img/logo.png';


function StartVideo() {
    return (
        <div className={"start-view"} id={"startView"}>
            <video loop autoPlay muted id={"startVideo"}>
                <source src={video} type="video/mp4" />
            </video>
            <StartLogo />
        </div>

    )
}

function StartLogo() {
    function clickLogo() {
        document.getElementById("startView").remove();
        document.getElementById("container").style.display = 'block';
    }
    return (
        <div className={"start-logo"} onClick={clickLogo}>
            <h1>Return To Nature</h1>
            <img src={logo} id={"logo"} alt={""}/>
        </div>
    )
}

function Container() {
    const pages = ['main','food','map','faq'];
    return (
        <div className={"container-wrap"} id={"container"}>
            <LeftNav page={pages} />
            <MainView />
            <FoodView />
        </div>
    )
}

function LeftNav(props){
    return (
        <div className={"left-nav"}>
            <ul>
                {props.page.map((element,index) =>
                    <li data-page={element} key={index}><a href={'javascript.void(0)'}><span>{element}</span></a></li>
                )}
            </ul>
        </div>
    )
}

function MainView() {
    return (
        <div className={"main-view"}>
                <h1>1Page</h1>
        </div>
    )
}

function FoodView() {
    return (
        <div className={"main-view"}>
            <h1>2Page</h1>
        </div>
    )
}
// class StartView extends React.Component {
//
//     logoClick() {
//         alert("Click");
//     }
//
//     render() {
//         return (
//             <div>
//                 <StartVideo />
//                 <StartLogo logoClick={this.logoClick}/>
//             </div>
//         )
//     }
// }




class RenderDom extends React.Component {
    render() {
        return (
            <div className={"main-wrap"}>
                <StartVideo />
                <Container />
            </div>
        );
    }

}

ReactDOM.render(
    <RenderDom />,
    document.getElementById('root')
);