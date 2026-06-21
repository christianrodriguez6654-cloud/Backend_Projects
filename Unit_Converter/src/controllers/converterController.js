import { ConversionService } from '../services/conversionService.js';

const service = new ConversionService();

export const convertUnits = (req, res) => {
  try {
    const { type, value, from, to } = req.body;
    const result = service.calculate({ type, value, from, to });
    
    res.json({
      success: true,
      data: {
        original: { value, unit: from },
        converted: { value: parseFloat(result.toFixed(4)), unit: to }
      }
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};   