import Container from "../../components/Container";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import UserList from "../../components/UserList";

export default function Home() {
    return(
        <>
        <Header />
        <Container>
          <main className="content">
            <SearchBar />
            <UserList />
          </main>
        </Container>
      </>
    )
}