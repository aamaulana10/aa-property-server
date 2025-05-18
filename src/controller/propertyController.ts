import { Request, Response } from "express"
import { supabase } from "../utils/supabase"
import { Property } from "../response/Property"
import { v4 as uuidv4 } from "uuid"

export const getProperties = async (req: Request, res: Response): Promise<void> => {
    try {
      const userId = req.headers["x-user-id"] as string
      const { data, error } = await supabase
        .from("Properties")
        .select("*")
        .eq("user_id", userId)
  
      if (error) {
        res.status(500).json({ error })
        return
      }
  
      res.json(data)
    } catch (err) {
      res.status(500).json({ error: "Unexpected error" })
    }
  }

  export const createProperty = async (req: Request, res: Response): Promise<void> => {
    try {
      const property: Property = req.body
      property.user_id = req.headers["x-user-id"] as string
      property.id = uuidv4()
      const { data, error } = await supabase.from("Properties").insert([property])

      if (error) {
        res.status(500).json({ error })
        return
      }
  
      res.status(200).json(property)
    } catch (err) {
      res.status(500).json({ error: "Unexpected error" })
    }
  }

  export const updateProperty = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params
      const userId = req.headers["x-user-id"] as string
      const updates: Partial<Property> = req.body
  
      const { data: existingProperty, error: fetchError } = await supabase
        .from("Properties")
        .select("*")
        .eq("id", id)
        .eq("user_id", userId)
        .single()
  
      if (fetchError || !existingProperty) {
        res.status(404).json({ error: "Property not found or unauthorized" })
        return
      }
  
      const { error } = await supabase
        .from("Properties")
        .update(updates)
        .eq("id", id)
        .eq("user_id", userId)
  
      if (error) {
        res.status(500).json({ error })
        return
      }
  
      res.status(200).json({ message: "Property updated successfully" })
    } catch (err) {
      res.status(500).json({ error: "Unexpected error" })
    }
  }

  export const deleteProperty = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params
      const { error } = await supabase.from("Properties").delete().eq("id", id)
      if (error) {
        res.status(500).json({ error })
        return
      }
  
      res.status(204).send()
    } catch (err) {
      res.status(500).json({ error: "Unexpected error" })
    }
  }
