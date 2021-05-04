import styles from "../styles/componentes/Profile.module.css";

export function Profile(){
    return (
        <div className = {styles.profileContainer}>
          <img src ="https://pbs.twimg.com/profile_images/1205511179323482116/Dyo5zAdd_400x400.jpg" alt="Lucas Filipe"></img>
          <div>
              <strong>Lucas Filipe</strong>
              <p>imagem/svg</p>
              <p>Leve 1</p>
          </div>
        </div>
    );
}