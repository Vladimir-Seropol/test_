import { useEffect, useState } from "react";
import style from "./style.module.css";

// Тип для пользователя
interface User {
  login: { uuid: string };
  name: { first: string; last: string };
  picture: { medium: string };
  email: string;
}

const RandomUsers: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]); // Тип для состояния пользователей
  const [loading, setLoading] = useState(true); // Состояние загрузки
  const [error, setError] = useState<string | null>(null); // Состояние ошибки

  useEffect(() => {
    const fetchRandomUsers = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch("https://randomuser.me/api/?results=10");

        if (!response.ok) {
          throw new Error("Не удалось загрузить пользователей");
        }

        const data = await response.json();
        setUsers(data.results); // Обновляем состояние с пользователями
      } catch (err) {
        setError(err instanceof Error ? err.message : "Неизвестная ошибка");
      } finally {
        setLoading(false);
      }
    };

    fetchRandomUsers();
  }, []); // Пустой массив зависимостей, чтобы запрос выполнялся только один раз

  if (loading)
    return (
      <div className={style.container}>
        <div className={style.box}>
          <div className={style.loader}>
            <span></span>
          </div>
          <div className={style.loader}>
            <span></span>
          </div>
          <div className={style.loader}>
            <i></i>
          </div>
          <div className={style.loader}>
            <i></i>
          </div>
        </div>
      </div>
    );
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <div style={{ margin: "0 auto" }}>
      <h2 style={{ textAlign: "center" }}>Случайные пользователи</h2>
      <ul>
        {users.map((user) => (
          <li key={user.login.uuid} style={{  margin: "10px" }}>
            <img
              src={user.picture.medium}
              alt={`${user.name.first} ${user.name.last}`}
              style={{ width: "50px", borderRadius: "50%" }}
            />
            <div>
              <strong>
                {user.name.first} {user.name.last}
              </strong>
            </div>
            <div>{user.email}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RandomUsers;
