import AdditionalService from 'App/Models/AdditionalService'
import Chat from 'App/Models/Chat'
import ContactRequest from 'App/Models/ContactRequest'
import Feedback from 'App/Models/Feedback'
import Log from 'App/Models/Log'
import Notification from 'App/Models/Notification'
import Resource from 'App/Models/Resource'
import Student from 'App/Models/Student'
import User from 'App/Models/User'
import UserPayslip from 'App/Models/UserPayslip'
import UserSession from 'App/Models/UserSession'

export default class ArchiveController {
  /**
   * @param request
   * @param response
   */
  async leadsList({ request, response }) {
    try {
      const leads = await ContactRequest.archiveListing(request)
      return response.json(leads)
    } catch (exception) {
      return response.internalServerError({ message: exception.message })
    }
  }

  /**
   * @param request
   * @param response
   */
  async restoreLead({ request, response }) {
    try {
      let lead = await ContactRequest.find(request.body().id)
      if (!lead) {
        return response.notFound({ message: `Lead not found.` })
      }
      lead.deleted_at = null
      await lead.save()
      return response.json({ message: 'Lead Restored Successfully!' })
    } catch (exception) {
      return response.internalServerError({ message: exception.message })
    }
  }

  /**
   * @param request
   * @param response
   */
  async deleteLead({ request, response }) {
    try {
      await Student.query().where('lead_id', request.body().id).update({ lead_id: null })
      await ContactRequest.query().where('id', request.body().id).delete()
      return response.json({ message: 'Lead Deleted Successfully!' })
    } catch (exception) {
      return response.internalServerError({ message: exception.message })
    }
  }

  /**
   * @param request
   * @param response
   */
  async restoreAddOn({ request, response }) {
    try {
      let addon = await AdditionalService.find(request.body().id)
      if (!addon) {
        return response.notFound({ message: `AddOn not found.` })
      }
      addon.deleted_at = null
      await addon.save()
      return response.json({ message: 'AddOn Restored Successfully!' })
    } catch (exception) {
      return response.internalServerError({ message: exception.message })
    }
  }

  /**
   * @param request
   * @param response
   */
  async deleteAddOn({ request, response }) {
    try {
      await AdditionalService.query().where('id', request.body().id).delete()
      return response.json({ message: 'AddOn Deleted Successfully!' })
    } catch (exception) {
      return response.internalServerError({ message: exception.message })
    }
  }

  /**
   * @param request
   * @param response
   */
  async addOnList({ request, response }) {
    try {
      const addOn = await AdditionalService.archiveListing(request)
      return response.json(addOn)
    } catch (exception) {
      return response.internalServerError({ message: exception.message })
    }
  }

  /**
   * @param request
   * @param response
   */
  async applicationList({ request, response, auth }) {
    try {
      let user = await User.query()
        .where('id', auth.user.id)
        .preload('role')
        .first()
        .then((x) => x?.serialize())
      const leads = await Student.archiveListing(request, user)
      return response.json(leads)
    } catch (exception) {
      return response.internalServerError({ message: exception.message })
    }
  }

  /**
   * @param request
   * @param response
   */
  async restoreApplication({ request, response }) {
    try {
      let student = await Student.find(request.body().id)
      if (!student) {
        return response.notFound({ message: `Applcation not found.` })
      }

      let exists = await Student.query()
        .where('id', '!=', student.id)
        .where('email', student.email)
        .whereNull('deleted_at')
        .first()
      if (exists) {
        return response.notFound({ message: `you cannot restore. Student already existing with the same email.` })
      }
      student.deleted_at = null;
      await  User.query().where('email',student.email).where('active',0).update({
        deleted_at:null,
        active:1
      })
      await student.save()
      return response.json({ message: 'Applcation Restored Successfully!' })
    } catch (exception) {
      return response.internalServerError({ message: exception.message })
    }
  }

  /**
   * @param request
   * @param response
   */
  async deleteApplication({ request, response }) {
    try {
      let student = await Student.query().where('id', request.body().id).first()
      if (!student) {
        return response.notFound({ message: `Applcation not found.` })
      }
      await student?.related('checklist').detach()
      await student?.related('universities').detach()
      await Chat.query().where('application_id',student?.id).delete()
      await Log.query().where('user_id',student.user_id).delete()
      await Feedback.query().where('student_id',student.id).delete()
      await student?.delete();
      await Notification.query().where('receiver_id',student.user_id).delete()
      await UserSession.query().where('user_id',student.user_id).delete()
      await UserPayslip.query().where('user_id',student.user_id).delete()
      await User.query().where('id',student.user_id).delete()
      return response.json({ message: 'Application Deleted Successfully!' })
    } catch (exception) {
      return response.internalServerError({ message: exception.message })
    }
  }

  /**
   * @param request
   * @param response
   */
  async usersList({ request, response }) {
    try {
      const users = await User.archiveListing(request)
      return response.json(users)
    } catch (exception) {
      return response.internalServerError({ message: exception.message })
    }
  }

  /**
   * @param request
   * @param response
   */
  async restoreUser({ request, response }) {
    try {
      let user = await User.find(request.body().id)
      if (!user) {
        return response.notFound({ message: `User not found.` })
      }

      let exists = await User.query()
      .where('email', user.email)
      .where('id', '!=', user.id)
      .whereNull('deleted_at').first()
      if (exists) {
        return response.notFound({ message: `you cannot restore. User already existing with the same email.` })
      }

      user.deleted_at = null
      await user.save()
      return response.json({ message: 'User Restored Successfully!' })
    } catch (exception) {
      return response.internalServerError({ message: exception.message })
    }
  }

  /**
   * @param request
   * @param response
   */
  async deleteUser({ request, response }) {
    try {
      let user = await User.query().where('id', request.body().id).first()
      if (!user) {
        return response.notFound({ message: `User not found.` })
      }

      await Student.query().where('contact_id',user.id).update('contact_id',null)
      await ContactRequest.query().where('assigned_to',user.id).update('assigned_to',null)
      await Notification.query().where('receiver_id',user.id).delete()
      await UserSession.query().where('user_id',user.id).delete()
      await UserPayslip.query().where('user_id',user.id).delete()
      await Log.query().where('user_id',user.id).delete()
      await user.delete();
      return response.json({ message: 'User Deleted Successfully!' })
    } catch (exception) {
      return response.internalServerError({ message: exception.message })
    }
  }

  /**
   * @param request
   * @param response
   */
  async resourcesList({ request, response }) {
    try {
      const leads = await Resource.deleteFiles(request)
      return response.json(leads)
    } catch (exception) {
      return response.internalServerError({ message: exception.message })
    }
  }

  /**
   * @param request
   * @param response
   */
  async restoreResource({ request, response }) {
    try {
      let resource = await Resource.find(request.body().id)
      if (!resource) {
        return response.notFound({ message: `Resource not found.` })
      }
      resource.deleted_at = null
      await resource.save()
      return response.json({ message: 'Resource Restored Successfully!' })
    } catch (exception) {
      return response.internalServerError({ message: exception.message })
    }
  }

  /**
   * @param request
   * @param response
   */
  async deleteResource({ request, response }) {
    try {
      await Resource.query().where('id', request.body().id).delete()
      return response.json({ message: 'Resource Deleted Successfully!' })
    } catch (exception) {
      return response.internalServerError({ message: exception.message })
    }
  }
}
