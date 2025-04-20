import numpy as np
from tgdm import tgdm
import matplotlib.pyplot as plt
#Инициализация сети Хопфилда
class HopfieldADC:
    def _init＿ (self, num_neurons):
        self.num_neurons = num_neurons
# Используем вещественные числа для матрицы весов 
        self.weights = np.zeros((num_neurons, num_neurons), dtype=np.float64) # Матрица весов # с вещественными числами

    def train(self, patterns, learning_rate=0.1, iterations=1000): 
    # "
# Усложненное обучение сети Хопфилда с вещественными весами. Обновление весов происходит несколько раз для каждого паттерна, с учетом ошибок. 1
        for _ in tqdm(range(iterations), desc="Обучение ceти", ncols=100): 
            for pattern in patterns:
# Вычисление ошибки на основе разницы между паттерном и текущими состояниями 
                error = pattern - np.dot(self.weights, pattern)
# Обновление весов с учетом ошибки и шага обучения (вещественные веса) 
                self.weights += learning_rate * np.outer(pattern, error)
# Нормализация весов np.fill_diagonal(self.weights, 0) # Диагональ должна быть нулевая 
                self.weights /= len(patterns)
    def run(self, input_signal, iterations=10000): 
        # "
# Запуск сети Хопфилда для обработки входного сигнала.
        state = input_signal.copy()
        state_history = [state.copy()] # История состояния сети для визуализации 
        for _ in tqdm(range(iterations), desc="Итерации сети Хопфилда", ncols=100):
            net_input = np.dot(self.weights, state) # Суммарный вход для всеx нейронов 
            state = np.where(net_input > 0, 1, -1) # Пороrовая функция активации 
            state_history.append(state.copy()) # Coxpаняем состояние сети после каждой итерации 
            return state, state_history