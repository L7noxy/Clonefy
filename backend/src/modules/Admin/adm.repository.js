import User from './adm.model.js'
import bcrypt from 'bcryptjs'

const findAdminById= async (id) => {
  return await User.findById(id).select('-senha');
};

const updateAdmin= async (id, data) => {
 const user= await user.findById(id)

 if(!user){
  throw new Error('Usuário Admnistrador não encontrado')
 }

 user.nome= data.nome || user.nome
 user.email= data.email || user.email

 if (data.senha){
  const salt= await bcrypt.genSalt.genSalt(10)
  user.senha= await bcrypt.hash(data.senha, salt)
 }

 const updateUser= await user.save()
 return updateUser
}

export {findAdminById, updateAdmin}