import Notification from "App/Models/Notification"

export default class NotificationController {
    
 /**
   * @param request
   * @param response
   */
  public async index({ request, response, auth }) {
    try {
      const list = await Notification.listing(request,auth.user.id)
      const count = await Notification.query()
      .where('receiver_id',auth.user.id)
      .where('read',0)
      .count('id as total')
      .first()
      return response.send({data:list,count:count?.$extras.total})
    } catch (exception) {
      return response.internalServerError({ message: exception.message })
    }
  }

   /**
   * @param request
   * @param response
   */
   public async clearAllNotifications({response, auth }) {
    try {
      await Notification.query().where('receiver_id',auth.user.id).update('active',0)
      return response.json({ message: 'Notification Cleared SuccessFully' })
    } catch (exception) {
      return response.internalServerError({ message: exception.message })
    }
  }

   /**
   * @param request
   * @param response
   */
   public async markAsReadNotifications({response, auth }) {
    try {
      await Notification.query().where('receiver_id',auth.user.id).update('read',1)
      return response.json({ message: 'Notification Mark As Read SuccessFully.' })
    } catch (exception) {
      return response.internalServerError({ message: exception.message })
    }
  }
}
