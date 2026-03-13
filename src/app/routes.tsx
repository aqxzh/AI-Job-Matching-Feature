import { createHashRouter } from "react-router-dom";
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

export const router = createHashRouter([
  {
    path: "/",
    element: <VacanciesWithChat />,
  },
  {
    path: "/vacancies",
    element: <VacanciesWithChat />,
  },
]);