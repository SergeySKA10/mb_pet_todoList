import type { Metadata } from 'next';
import { Header } from '@/features/components/Header/Header';
import { TodoList } from '@/features/components/TodoList/TodoList';

export const metadata: Metadata = {
    title: 'Todos List',
    description: 'to do list app',
};

export default function Home() {
    return (
        <main>
            <Header />
            <TodoList />
        </main>
    );
}
