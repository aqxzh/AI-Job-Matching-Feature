import { useState, useEffect } from 'react';
import { Search, Bookmark, ChevronRight } from 'lucide-react';
import { vacancies, type Vacancy } from '../data/vacancies';
import { Checkbox } from '../components/ui/checkbox';
import { Label } from '../components/ui/label';
import { Input } from '../components/ui/input';

export default function Vacancies() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredVacancies, setFilteredVacancies] = useState<Vacancy[]>([]);
  const [showRecommended, setShowRecommended] = useState(false);
  const [selectedSections, setSelectedSections] = useState<string[]>([]);

  // Mock профиль пользователя (тот же, что в AIJobChat)
  const userProfile = {
    category: 'IT',
    skills: ['Python', 'SQL', 'Аналитика данных', 'Цифровизация', 'Project Management'],
    totalYears: 3.5
  };

  const findMatchingVacancies = (): Vacancy[] => {
    return vacancies.filter(vacancy => {
      // Проверка категории
      if (vacancy.jobType === userProfile.category) return true;
      
      // Проверка навыков
      const hasMatchingSkills = userProfile.skills.some(skill => 
        vacancy.requirements.some(req => req.toLowerCase().includes(skill.toLowerCase()))
      );
      
      return hasMatchingSkills;
    }).slice(0, 3);
  };

  useEffect(() => {
    // Используем ту же логику, что и в AI чате
    const recommended = findMatchingVacancies();
    setFilteredVacancies(recommended);
    setShowRecommended(true);
  }, []);

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setFilteredVacancies([]);
      return;
    }

    const filtered = vacancies.filter(v => 
      v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.department.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredVacancies(filtered);
  };

  const toggleSection = (section: string) => {
    if (selectedSections.includes(section)) {
      setSelectedSections(selectedSections.filter(s => s !== section));
    } else {
      setSelectedSections([...selectedSections, section]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simple Header */}
      <div className="bg-white border-b px-6 py-4">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-2xl font-bold text-[#6147C6]">eQyzmet - Вакансии</h1>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white border-b px-6 py-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex gap-3">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="Поиск вакансий..."
              className="flex-1 px-4 py-2 border rounded"
            />
            <button 
              onClick={handleSearch}
              className="px-6 py-2 bg-[#6147C6] text-white rounded hover:bg-[#4d3aa0]"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-6 py-6">
        <div className="flex gap-6">
          {/* Left Side - Vacancies List */}
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-4">Вакансии ({filteredVacancies.length})</h2>

            {showRecommended && filteredVacancies.length > 0 && (
              <div className="mb-4 p-3 bg-[#F3F0FF] border border-[#D4C5F9] rounded">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-6 h-6 bg-[#6147C6] rounded-full flex items-center justify-center text-white text-xs font-bold">
                    AI
                  </div>
                  <span className="font-medium text-[#6147C6]">
                    Подобрано {filteredVacancies.length} вакансий на основе вашего профиля
                  </span>
                </div>
              </div>
            )}

            {filteredVacancies.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">Используйте поиск или откройте AI чат для персональных рекомендаций</p>
              </div>
            )}

            <div className="space-y-2">
              {filteredVacancies.map((vacancy) => (
                <div key={vacancy.id} className="bg-white border border-gray-200 rounded p-3 hover:shadow-md transition-shadow">
                  {/* Badges */}
                  <div className="flex gap-2 mb-2">
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded">
                      {vacancy.competitionType}
                    </span>
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded">
                      {vacancy.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-[#6147C6] font-semibold text-base mb-1 hover:underline cursor-pointer">
                    {vacancy.title}
                  </h3>

                  {/* Published and Status */}
                  <p className="text-sm text-gray-600 mb-1">
                    Опубликовано: <span className="text-orange-600">{vacancy.publishedDate}</span>
                    <span className="mx-3">Статус: <span className="text-orange-600">{vacancy.status}</span></span>
                  </p>

                  {/* Salary */}
                  <p className="text-base font-bold text-gray-900 mb-1">
                    Средний оклад {vacancy.salary.toLocaleString('ru-RU')} тг.
                  </p>

                  {/* Department */}
                  <p className="text-sm text-gray-700 mb-2">
                    {vacancy.department}
                  </p>

                  {/* Deadline */}
                  <p className="text-sm text-gray-600 mb-3">
                    Срок приема заявок: <span className="text-orange-600">{vacancy.applicationDeadline.start} - {vacancy.applicationDeadline.end}</span>
                    {' '}<span className="text-orange-700">(Осталось {vacancy.applicationDeadline.daysLeft} дн.)</span>
                  </p>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <button className="bg-[#6147C6] hover:bg-[#4d3aa0] text-white px-4 py-1.5 rounded text-sm flex items-center gap-1">
                      Подробнее
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    <button className="border border-gray-300 hover:bg-gray-50 px-2 py-1.5 rounded">
                      <Bookmark className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Filters */}
          <div className="w-80 flex-shrink-0">
            <div className="sticky top-6">
              {/* Search Vacancies Section */}
              <div className="mb-6">
                <div className="bg-[#6147C6] text-white px-4 py-2 rounded-t font-semibold text-sm">
                  ПОИСК ВАКАНСИЙ:
                </div>
                <div className="border border-gray-200 rounded-b p-4 bg-white">
                  <button className="text-blue-600 text-sm hover:underline">ОБ ОТБОРЕ</button>
                </div>
              </div>

              {/* Разделы */}
              <div className="mb-6">
                <h3 className="text-orange-700 font-semibold mb-3 text-sm">Разделы</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label className="flex items-center gap-2 cursor-pointer text-sm">
                      <Checkbox 
                        id="actual"
                        checked={selectedSections.includes('actual')}
                        onCheckedChange={() => toggleSection('actual')}
                      />
                      <span>Актуальное</span>
                    </Label>
                    <span className="text-xs text-gray-500">2236</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <Label className="flex items-center gap-2 cursor-pointer text-sm">
                      <Checkbox 
                        id="suitable"
                        checked={selectedSections.includes('suitable')}
                        onCheckedChange={() => toggleSection('suitable')}
                      />
                      <span>Подходящие вакансии</span>
                    </Label>
                    <span className="text-xs text-gray-500">0</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <Label className="flex items-center gap-2 cursor-pointer text-sm">
                      <Checkbox 
                        id="archive"
                        checked={selectedSections.includes('archive')}
                        onCheckedChange={() => toggleSection('archive')}
                      />
                      <span>Архивные</span>
                    </Label>
                    <span className="text-xs text-gray-500">44738</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <Label className="flex items-center gap-2 cursor-pointer text-sm">
                      <Checkbox 
                        id="subscriptions"
                        checked={selectedSections.includes('subscriptions')}
                        onCheckedChange={() => toggleSection('subscriptions')}
                      />
                      <span>Подписки</span>
                    </Label>
                    <span className="text-xs text-gray-500">0</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <Label className="flex items-center gap-2 cursor-pointer text-sm">
                      <Checkbox 
                        id="favorites"
                        checked={selectedSections.includes('favorites')}
                        onCheckedChange={() => toggleSection('favorites')}
                      />
                      <span>Избранные</span>
                    </Label>
                    <span className="text-xs text-gray-500">0</span>
                  </div>
                </div>
              </div>

              {/* Блок вакансий */}
              <div className="mb-6">
                <h3 className="text-orange-700 font-semibold mb-3 text-sm">Блок вакансий</h3>
                <div className="space-y-2">
                  <Label className="flex items-center gap-2 cursor-pointer text-sm">
                    <Checkbox id="administrative" />
                    <span>Административный</span>
                  </Label>
                  <Label className="flex items-center gap-2 cursor-pointer text-sm">
                    <Checkbox id="law" />
                    <span>Правоохранительный</span>
                  </Label>
                </div>
              </div>

              {/* Категория должности */}
              <div className="mb-6">
                <h3 className="text-orange-700 font-semibold mb-3 text-sm">Категория должности</h3>
                <Input 
                  placeholder="Выберите категорию должности"
                  className="text-sm"
                />
              </div>

              {/* Административная государственная должность */}
              <div className="mb-6">
                <h3 className="text-orange-700 font-semibold mb-3 text-sm">Административная государственная должность</h3>
                <Input 
                  placeholder="Выберите должность"
                  className="text-sm"
                />
              </div>

              {/* Уровень образования */}
              <div className="mb-6">
                <h3 className="text-orange-700 font-semibold mb-3 text-sm">Уровень образования</h3>
                <div className="space-y-2">
                  <Label className="flex items-center gap-2 cursor-pointer text-sm">
                    <Checkbox id="higher" />
                    <span>Высшее образование</span>
                  </Label>
                  <Label className="flex items-center gap-2 cursor-pointer text-sm">
                    <Checkbox id="postgraduate" />
                    <span>Послевузовское образование</span>
                  </Label>
                  <Label className="flex items-center gap-2 cursor-pointer text-sm">
                    <Checkbox id="postdiploma" />
                    <span>Последипломное образование</span>
                  </Label>
                  <Label className="flex items-center gap-2 cursor-pointer text-sm">
                    <Checkbox id="professional" />
                    <span>Профессиональное образование</span>
                  </Label>
                  <Label className="flex items-center gap-2 cursor-pointer text-sm">
                    <Checkbox id="vocational" />
                    <span>Среднее профессиональное образование</span>
                  </Label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}