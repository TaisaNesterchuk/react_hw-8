import { useCallback, useState } from 'react'
import apiRoutes from '../api/apiRoutes'
import axios from 'axios'

const useTeachersApi = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchTeachers = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await axios.get(apiRoutes.getAllTeachers)
      setData(res.data)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }, [])

  const getTeacherById = useCallback(async (teacherId) => {
   setLoading(true)
   setError(null)
   try {
      const res = await axios.get(apiRoutes.getTeacherById(teacherId))
      return res.data
   } catch (error) {
      setError(error)
      return null
   } finally {
      setLoading(false)
   }
   }, [])

 const addTeacher = useCallback(async (newTeacherData) => {
    setLoading(true)
    setError(null)
    try {
      const res = await axios.post(apiRoutes.addTeacher, newTeacherData)
      setData(prevData => [...prevData, res.data])
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }, [])

  const updateTeacher = useCallback(async (teacherId, updatedData) => {
    setLoading(true)
    setError(null)
    try {
      const res = await axios.put(apiRoutes.updateTeacher(teacherId), updatedData)
      setData(prevData => prevData.map(teacher =>
        teacher.id === teacherId ? res.data : teacher))
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }, [])


  const deleteTeacher = useCallback(async (teacherId) => {
    setLoading(true)
    setError(null)
    try {
      await axios.delete(apiRoutes.deleteTeacher(teacherId))
      setData(prevData => prevData.filter(teacher => teacher.id !== teacherId))
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }, [])
  //   ------------
  return {
    data,
    loading,
    error,
    fetchTeachers,
    getTeacherById,
    addTeacher,
    updateTeacher,
    deleteTeacher
  }
}

export default useTeachersApi
