import math
import datetime

# Définition des constantes
M0 = 3
# Masse initiale (M₀)
T0 = datetime.datetime(1970, 1, 1).timestamp()  # Timestamp Unix de référence (T₀)
k = 1
# Constante de proportionnalité (k)
# Définition de la fonction f(T)
def f(T):
    return M0 + k * (T - T0)

# Calcul de f(T) pour T = T0 (timestamp Unix de référence)
T = T0
f_T = f(T)

# Exemple de calcul de f(T) pour un T donné en millisecondes
T = 1.67
# Exemple de timestamp Unix en millisecondes
f_T = f(T)
print(f"f({T}) = {f_T}")


