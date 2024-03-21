"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HabitManager = void 0;
class HabitManager {
    constructor() {
        this.habits = [];
    }
    addHabit(habit) {
        this.habits.push(habit);
    }
    removeHabit(habitId) {
        this.habits = this.habits.filter((habit) => habit.id !== habitId);
    }
    markAsAcquired(habitId) {
        const habit = this.getHabitById(habitId);
        if (habit) {
            habit.acquired = true;
        }
    }
    unMarkAsAcquired(habitId) {
        const habit = this.getHabitById(habitId);
        if (habit) {
            habit.acquired = false;
        }
    }
    editHabit(habitId, updatedHabit) {
        const index = this.habits.findIndex((habit) => habit.id === habitId);
        if (index !== -1) {
            this.habits[index] = updatedHabit;
        }
    }
    getAllHabits() {
        return this.habits;
    }
    getHabitById(habitId) {
        return this.habits.find((habit) => habit.id === habitId);
    }
}
exports.HabitManager = HabitManager;
