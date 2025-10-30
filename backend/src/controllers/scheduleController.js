import { Event } from '../models/eventModel.js';

export const getEvents = async (req, res, next) => {
  try {
    const events = await Event.find().sort({ day: 1, time: 1 });

    const groupedByDay = events.reduce((acc, event) => {
      const dayKey = `day_${event.day}`;
      if (!acc[dayKey]) acc[dayKey] = [];
      acc[dayKey].push(event);
      return acc;
    }, {});

    res.status(200).json({
      total: events.length,
      schedule: groupedByDay,
    });
  } catch (error) {
    next(error);
  }
};
