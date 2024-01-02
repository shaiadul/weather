import { Request, Response } from 'express'
import { DataServices } from './data.service'

const getData = async (req: Request, res: Response) => {
  try {
    const result = await DataServices.getData()

    res.status(200).json({
      success: true,
      data: result,
      message: 'Successfully fetched data',
    })
  } catch (error: unknown) {
    res.status(500).json({
      success: false,
      data: null,
      message: 'Internal Server Error',
    })
  }
}

export const DataController = {
  getData,
}
