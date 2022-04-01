import os
import sys

project_root_path = os.getcwdb().decode()

sys.path.append(project_root_path)


from science_utils_k.utils.Logger import Logger
Logger.log2terminal(
    "Add project_root_path to sys.path. Project_root_path : %s" % project_root_path
)