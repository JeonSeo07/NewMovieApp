import React, { Component } from 'react'
import Movie from '../components/Movie'
import axios from 'axios';
import '../styles/Home.css'

export class Home extends Component {
  state = {
    isLoading: true,
    movies: [],
  }


  // 서버에서 데이터를 불러올 때까지 기다렸다가 처리하라. > async await
  // node.json에서는 get방식을 자주 쓴다.
  getMovies = async() => {
    // axios 라이브러리에서 설치해야한다 > npm install axios
    // axios로 영화데이터를 불러들이겠다.
    // package.json 파일에서 확인할 수 있다.
    // 상단에 import axios from 'axios' 하기

    // {data: {data: {movies}}} > console 창에서 열어서 확인
    const {data: {data: {movies}}} = await axios.get('https://yts-proxy.now.sh/list_movies.json?genre=animation&sort_by=like_count');
    console.log('movies',movies);
    this.setState({isLoading: false, movies}) //키: 키값 이름이 동일하면
    //movies: movies > 속성: 속성값이 똑같으면 속성이름만 적으면 된다.
  }

  componentDidMount(){
    this.getMovies();

    // setTimeout(()=>{
    //   this.setState({isLoading : false});
    // }, 6000);
  }

  // 삼항연산자를 사용 { ? true : false}
  render() {
    const {isLoading, movies} = this.state; //구조 분해 할당
    return (
      <section className='container'>
        {isLoading ? 
        <div className='loader'>
          <span className='loader_text'>'Loading...'</span>
        </div>
       : 
      <div className='movies'>
        {/* medium_cover_image , title, year, summary*/}
        {movies.map((movies, index) => (
        <Movie
          key = {index}
          id = {movies.id}
          image = {movies.medium_cover_image}
          title = {movies.title}
          year = {movies.year}
          summary = {movies.summary}
          genres = {movies.genres}
         />
        ))}
      </div>}
      </section>
    )
  }
}

export default Home