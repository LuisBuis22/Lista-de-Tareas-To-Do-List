import { Habit } from "../models/modeloHabito";

export class HabitManager {
  // Guardar los hábitos en una lista
  private habits: Habit[] = [];

  // Métodos relativos a los hábitos

  addHabit(habit: Habit): void {
    this.habits.push(habit);
  }

  removeHabit(habitId: string): void {
    this.habits = this.habits.filter((habit) => habit.id !== habitId);
  }

  markAsAcquired(habitId: string): void {
    const habit = this.getHabitById(habitId);
    if (habit) {
      habit.acquired = true;
    }
  }

  unMarkAsAcquired(habitId: string): void {
    const habit = this.getHabitById(habitId);
    if (habit) {
      habit.acquired = false;
    }
  }

  editHabit(habitId: string, updatedHabit: Habit): void {
    const index = this.habits.findIndex((habit) => habit.id === habitId);
    if (index !== -1) {
      this.habits[index] = updatedHabit;
    }
  }

  getAllHabits(): Habit[] {
    return this.habits;
  }

  getHabitById(habitId: string): Habit | undefined {
    return this.habits.find((habit) => habit.id === habitId);
  }
}
