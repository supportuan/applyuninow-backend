const Validator = require('validatorjs')
import { schema } from '@ioc:Adonis/Core/Validator'
import Application from '@ioc:Adonis/Core/Application'
import { cuid } from '@ioc:Adonis/Core/Helpers'
import { toS3 } from 'App/Helpers/upload'
import Resource from 'App/Models/Resource'
import moment from 'moment'

export default class ResourceController {
  /**
   * @param request
   * @param response
   */
  public async index({ request, response }) {
    try {
      const list = await Resource.listing(request)
      return response.json(list)
    } catch (exception) {
      return response.internalServerError({ message: exception.message })
    }
  }

  /**
   * @param request
   * @param response
   */
  public async create({ request, response }) {
    const rules: any = {
      name: 'required|max:200',
    }

    const validation = new Validator(request.body(), rules)
    if (validation.fails()) {
      return response.badRequest(validation.errors.errors)
    }

    const uploadSchema = schema.create({
      file: schema.file.optional({
        size: '10mb',
        extnames: ['jpeg', 'jpg', 'png','jfif'],
      }),
    })
    const payload = await request.validate({ schema: uploadSchema })
    let fileUrl: any = ''
    if (payload.file) {
      const fileName = `${cuid()}.${payload.file.extname}`
      await payload.file.move(Application.tmpPath('uploads'), {
        name: fileName,
      })
      fileUrl = await toS3(Application.tmpPath('uploads') + '/' + fileName)
    }

    const body = request.body()
    body['slug'] = body.name.toLowerCase().replace(/\s/g, '-').replace(/\//g, '-') 
    const resourceNameExists = await Resource.query()
      .where('name', body.slug)
      .whereNull('deleted_at')
      .first()
    if (resourceNameExists) {
      return response.badRequest({
        message: 'Resource name already exists',
      })
    }

    let resource = new Resource()
    resource.name = body.name
    resource.folder_image = fileUrl
    resource.user_type = request.qs().type
    resource.is_folder = true
    resource.slug = body.slug

    await resource.save()
    return response.json(resource)
  }

  /**
   * @param request
   * @param response
   */
  public async update({ request, response }) {
    const { resource } = request
    const rules: any = {
      name: 'required|max:200',
    }

    const validation = new Validator(request.body(), rules)
    if (validation.fails()) {
      return response.badRequest(validation.errors.errors)
    }

    const uploadSchema = schema.create({
      file: schema.file.optional({
        size: '10mb',
        extnames: ['jpeg', 'jpg', 'png','jfif'],
      }),
    })
    const payload = await request.validate({ schema: uploadSchema })
    let fileUrl: any = ''
    if (payload.file) {
      const fileName = `${cuid()}.${payload.file.extname}`
      await payload.file.move(Application.tmpPath('uploads'), {
        name: fileName,
      })
      fileUrl = await toS3(Application.tmpPath('uploads') + '/' + fileName)
    }
    const body = request.body()

    if(!fileUrl){
      resource.folder_image = body.image || ''
    }else{
      resource.folder_image = fileUrl
    }

    body['slug'] = body.name.toLowerCase().replace(/\s/g, '-').replace(/\//g, '-') 
    const resourceNameExists = await Resource.query()
      .where('name', body.slug)
      .whereNull('deleted_at')
      .first()
    if (resourceNameExists && resource.id != resourceNameExists.id) {
      return response.badRequest({
        message: 'Resource name already exists',
      })
    }

    resource.name = body.name
    resource.user_type = body.type
    resource.is_folder = true
    resource.slug = body.slug
    await resource.save()
    return response.json(resource)
  }

  /**
   * @param request
   * @param response
   */
  async destroy({ request, response }) {
    try {
      const { resource } = request
      resource['deleted_at'] = moment().utcOffset('+05:30').format('YYYY-MM-DD HH:mm:ss')
      await resource.save()
      return response.json({ message: 'deleted Successfully' })
    } catch (exception) {
      console.log(exception)
      return response.internalServerError({ message: exception.message })
    }
  }

  /**
   * @param request
   * @param response``
   */
  public async subFileList({ request, response }) {
    try {
      const parent = await Resource.query()
        .where('slug', request.qs().slug)
        .whereNull('deleted_at')
        .first()
      if (!parent) {
        return response.badRequest({
          message: 'Resource Folder Deleted! ',
        })
      }
      request.qs().parent_id = parent.id
      const list = await Resource.subFileList(request)
      return response.json(list)
    } catch (exception) {
      return response.internalServerError({ message: exception.message })
    }
  }

  /**
   * @param request
   * @param response
   */
  public async fileCreate({ request, response }) {
    const rules: any = {
      name: 'required|max:200',
    }

    const validation = new Validator(request.body(), rules)
    if (validation.fails()) {
      return response.badRequest(validation.errors.errors)
    }

    const uploadSchema = schema.create({
      file: schema.file.optional({
        size: '10mb',
        extnames: ['pdf'],
      }),
    })
    const body = request.body()
    const parent = await Resource.query().where('slug', body.slug).whereNull('deleted_at').first()
    if (!parent) {
      return response.badRequest({
        message: 'Resource Folder Deleted! ',
      })
    }
    const payload = await request.validate({ schema: uploadSchema })
    let fileUrl: any = ''
    if (payload.file) {
      const fileName = `${cuid()}.${payload.file.extname}`
      await payload.file.move(Application.tmpPath('uploads'), {
        name: fileName,
      })
      fileUrl = await toS3(Application.tmpPath('uploads') + '/' + fileName)
    }
    let resource = new Resource()
    resource.name = body.name
    resource.url = fileUrl
    resource.user_type = request.qs().type
    resource.is_folder = false
    resource.slug = body.name.toLowerCase().replace(/\s/g, '-').replace(/\//g, '-') + 1
    resource.parent_id = parent.id
    await resource.save()
    return response.json(resource)
  }

  /**
   * @param request
   * @param response
   */
  async fileDestroy({ request, response }) {
    try {
      const { resource } = request
      resource['deleted_at'] = moment().utcOffset('+05:30').format('YYYY-MM-DD HH:mm:ss')
      await resource.save()
      return response.json({ message: 'deleted Successfully' })
    } catch (exception) {
      console.log(exception)
      return response.internalServerError({ message: exception.message })
    }
  }
}
