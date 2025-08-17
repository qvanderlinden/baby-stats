import pkgutil
import importlib
import pathlib

# Dynamically import all modules in this package
package_dir = pathlib.Path(__file__).resolve().parent
for module in pkgutil.iter_modules([str(package_dir)]):
    importlib.import_module(f"{__name__}.{module.name}")
