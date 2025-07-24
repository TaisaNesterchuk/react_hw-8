import { useNavigate, useParams } from 'react-router'
import { useEffect, useState } from 'react'
import useTeachersApi from '../../hooks/useTeachersApi'
import frontRoutes from '../../routes/frontRoutes'
import styles from './TeacherForm.module.css'

function TeachersForm() {
  const [teacher, setTeacher] = useState({ name: '', subject: '', photo: '' })
  const { id } = useParams()
  const navigate = useNavigate()
  const isEditing = !!id

  const {
    addTeacher,
    updateTeacher,
    getTeacherById,
  } = useTeachersApi()

  useEffect(() => {
    if (isEditing) {
      async function loadTeacher() {
        const data = await getTeacherById(id)
        if (data) setTeacher(data)
        else navigate(frontRoutes.navigate.teachers.list)
      }

      loadTeacher()
    }
  }, [id, isEditing, getTeacherById, navigate])

  const handleChange = (e) => {
    setTeacher((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSave = async () => {
    if (isEditing) {
      await updateTeacher(id, teacher)
    } else {
      await addTeacher(teacher)
    }

    navigate(frontRoutes.navigate.teachers.index)
  }

  const handleCancel = () => {
    navigate(frontRoutes.navigate.teachers.index)
  }

  const isLoading = id && !teacher.id

  return isLoading ? (
    <div>Завантаження ....</div>
  ) : (
      <div className={styles.containerTeachersForm}>
      <h2>{isEditing ? 'Редагувати вчителя' : 'Додати нового вчителя'}</h2>
      <label>Ім'я:</label>
      <input
        name="name"
        value={teacher.name}
        onChange={handleChange}
        placeholder="Ім'я"
      />
      <label>Предмет:</label>
      <input
        name="subject"
        value={teacher.subject}
        onChange={handleChange}
        placeholder="Предмет"
      />
      <label>Фото URL(необов'язково):</label>
      <input
        name="photo"
        value={teacher.photo}
        onChange={handleChange}
        placeholder="Фото URL(необов'язково)"
      />
      <button onClick={handleSave}>{isEditing ? 'Оновити вчителя' : 'Додати вчителя'}</button>
      <button onClick={handleCancel}>Скасувати</button>
      </div>
  )
}

export default TeachersForm
