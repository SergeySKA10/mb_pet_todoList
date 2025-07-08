import { Header } from '@/features/components/Header/Header';
import { TodoList } from '@/features/components/TodoList/TodoList';
// import Image from "next/image";
// import styles from "./page.module.css";

export default function Home() {
    return (
        <main>
            <Header />
            <TodoList />
        </main>
    );
}
