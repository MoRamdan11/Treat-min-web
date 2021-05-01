import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

export const GridContainer = styled(Grid)`
    margin: 0px;
    border-radius: 20px;
    width: 100%;
    text-align: center;
    color: #235274;
    
`;

export const GridSupervisor = styled(Grid)`
    text-align: center;
    padding: 0 20px 20px 20px;
    margin-bottom: 20px;

`;

export const GridElement = styled(Grid)`
    text-align: center;

`;

export const GridIdea = styled(Grid)`
    text-align: center;
    width: 400px;
    margin :0 auto 0 auto;
    
`;

export const GridWeb = styled(Grid)`
    text-align: center;
    background-color: #235274;
    padding: 0 20px 20px 20px;
    /*width: 100%;*/
    color: white;
    border-radius: 10px;
`;

export const GridBackEnd = styled(Grid)`
    text-align: center;
    padding: 0 20px 20px 20px;
    margin-bottom: 20px;

`;

export const GridMobile = styled(Grid)`
    text-align: center;
    margin :0px;
    padding: 0 20px 20px 20px;
    background-color: #235274;
    border-radius: 20px 20px 0 0;
    
`;
export const GridMobileElements = styled(Grid)`
    color: white;
    /*@media screen and (min-width: 768px) {
        padding-left: 100px;   
    }
    @media screen and (min-width: 1080px) {
        padding-left: 200px;   
    }*/
`;

export const AvaterImg = styled.img`
    vertical-align: middle;
    width: 12em;
    height: 12em;
    border-radius: 50%;
    margin-bottom: 5px;
    /*@media screen and (max-width: 480px) {
        width:  100px;
        height: 100px;
    }*/
    @media screen and (max-width: 800px) {
        margin-top: 20px;
    }
`;

export const H1 = styled.h1`
    display: inline;
    margin: 0px;
`;

export const Link = styled.a`
    color: black;
    text-decoration: none;
    &:hover{
        color: #00917c;
    }
`;

export const Hr = styled.hr`
  border: dotted #00917c 4px;
  border-bottom: none;
  width: 20%;
  margin: 20px auto;
`;
export const TeamImg = styled.img`
    width: 600px;
    height: 600px;
    @media screen and (max-width: 480px) {
        width: 300px;
        height: 300px;
    }
    @media screen and (min-width: 1080px) {
        margin-left: 100px;
    }
    @media screen and (max-width: 300px) {
        margin-left: 0px;
    }
`;

export const SupervisorsDiv = styled.div`
    border-radius: 0 0 20px 20px;
    background-color: #f4f9f9;
    width: 500px;
    margin: 0 auto 0 auto;
    margin-bottom: 20px;
    color: #235274;
    @media screen and (max-width: 480px) {
        width: 350px;
    }
    @media screen and (max-width: 350px) {
        width: 250px;
    }
    @media screen and (max-width: 300px) {
        width: 200px;
    }
`;
/*<GridIdea xs={12} sm={12} md={12} lg={12}>
                    <h1 className = {styles.fontStyle} style={{ color: "#00917c"}}>Treat-min:</h1>
                    <p className = {styles.fontStyle}>is an idea of graduation project at Faculty of Engineering, <Link target="_blank" href="https://eng.asu.edu.eg/">Ain Shams University</Link></p>
                </GridIdea>*/