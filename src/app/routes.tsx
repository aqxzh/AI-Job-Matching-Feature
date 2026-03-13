import { createBrowserRouter } from "react-router";
import Vacancies from './pages/Vacancies';
import { AIJobChat } from './components/AIJobChat';

// Страница вакансий с чатом
function VacanciesWithChat() {
  return (
    <>
      <Vacancies />
      <AIJobChat />
    </>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <VacanciesWithChat />,
  },
  {
    path: "/vacancies",
    element: <VacanciesWithChat />,
  },
]);