var chart = echarts.init(
                dom=document.getElementById('chart'),   
             theme = null,
options = {'width': 800, 'height': 600},
);chart.setOption({'title': {'text': 'Classification'}, 'tooltip': {}, 'legend': {}, 'xAxis': {'name': 'epoch', 'nameLocation': 'end', 'data': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200], 'axisLabel': {'show': 'true'}}, 'yAxis': {}, 'series': [{'name': 'Train Instance Accuracy:', 'type': 'line', 'smooth': 'true', 'data': ['0.364837', '0.516463', '0.615346', '0.668801', '0.712093', '0.730285', '0.757419', '0.770630', '0.778150', '0.783333', '0.796037', '0.800813', '0.800305', '0.804776', '0.819207', '0.820528', '0.820935', '0.823476', '0.833943', '0.851829', '0.855285', '0.854268', '0.856504', '0.859858', '0.857825', '0.860671', '0.860671', '0.859959', '0.871138', '0.869106', '0.871443', '0.873780', '0.873882', '0.876423', '0.875407', '0.881199', '0.880691', '0.878455', '0.885061', '0.893801', '0.895935', '0.893394', '0.896138', '0.892480', '0.898374', '0.897459', '0.900610', '0.903354', '0.901423', '0.902642', '0.908130', '0.901423', '0.904980', '0.904268', '0.909553', '0.910061', '0.907622', '0.907317', '0.908638', '0.914431', '0.920224', '0.920833', '0.919411', '0.919512', '0.923577', '0.921646', '0.922154', '0.928252', '0.920528', '0.921646', '0.921138', '0.925407', '0.923577', '0.924898', '0.929370', '0.923984', '0.927033', '0.927033', '0.926016', '0.932317', '0.934553', '0.936484', '0.936179', '0.936382', '0.937907', '0.933537', '0.936992', '0.935061', '0.938720', '0.939736', '0.938618', '0.937195', '0.940549', '0.942480', '0.942073', '0.941667', '0.941260', '0.940244', '0.940447', '0.944512', '0.941057', '0.945630', '0.946443', '0.945732', '0.946850', '0.946037', '0.946646', '0.948882', '0.949289', '0.949390', '0.947967', '0.947053', '0.949085', '0.948577', '0.947764', '0.951118', '0.949898', '0.946748', '0.950102', '0.952033', '0.953659', '0.955488', '0.954472', '0.954980', '0.953354', '0.952846', '0.956606', '0.953557', '0.955793', '0.954675', '0.956606', '0.956606', '0.954573', '0.957724', '0.955996', '0.955488', '0.954472', '0.957927', '0.960976', '0.960671', '0.958638', '0.958333', '0.963618', '0.961890', '0.959248', '0.958130', '0.961789', '0.963008', '0.958638', '0.961484', '0.962195', '0.961484', '0.957927', '0.964126', '0.961687', '0.962703', '0.959959', '0.960569', '0.963720', '0.962195', '0.964533', '0.967175', '0.962602', '0.963516', '0.965346', '0.966159', '0.965041', '0.965346', '0.964939', '0.965549', '0.965142', '0.968089', '0.965650', '0.965142', '0.963720', '0.966159', '0.969106', '0.966159', '0.964837', '0.968699', '0.965955', '0.969715', '0.967988', '0.969411', '0.969207', '0.969207', '0.964736', '0.970528', '0.967886', '0.969004', '0.970325', '0.966362', '0.966565', '0.970630', '0.966972', '0.969715', '0.968394', '0.967581', '0.969411', '0.968394']}, {'name': 'Test Instance Accuracy:', 'type': 'line', 'smooth': 'true', 'data': ['0.353560', '0.534547', '0.660194', '0.722977', '0.754935', '0.759547', '0.789320', '0.768608', '0.724110', '0.794175', '0.775162', '0.817314', '0.770793', '0.839078', '0.830663', '0.849272', '0.828641', '0.848058', '0.826780', '0.871359', '0.869660', '0.857929', '0.844822', '0.863269', '0.854935', '0.852265', '0.855016', '0.873867', '0.858414', '0.850162', '0.887460', '0.858900', '0.854450', '0.862621', '0.858010', '0.873948', '0.864968', '0.872087', '0.862945', '0.886570', '0.870793', '0.878560', '0.882120', '0.883172', '0.883414', '0.875081', '0.884466', '0.887298', '0.882767', '0.881877', '0.874353', '0.878317', '0.876618', '0.872249', '0.878236', '0.874434', '0.881311', '0.878964', '0.858576', '0.882848', '0.884061', '0.888269', '0.887540', '0.888754', '0.891828', '0.892476', '0.890939', '0.894660', '0.888269', '0.880825', '0.889968', '0.889644', '0.895307', '0.890210', '0.892557', '0.888835', '0.892152', '0.888269', '0.884466', '0.886893', '0.900162', '0.898544', '0.889644', '0.902589', '0.899353', '0.890453', '0.884871', '0.889563', '0.883414', '0.885275', '0.886893', '0.897654', '0.892476', '0.893932', '0.886003', '0.902670', '0.900162', '0.893689', '0.892961', '0.896764', '0.901942', '0.898948', '0.901052', '0.898301', '0.897896', '0.905097', '0.887621', '0.900647', '0.892961', '0.894094', '0.895388', '0.896521', '0.903479', '0.898544', '0.899434', '0.901456', '0.897330', '0.897411', '0.897006', '0.896521', '0.900566', '0.898139', '0.900566', '0.902265', '0.895388', '0.902346', '0.899272', '0.903074', '0.900243', '0.900081', '0.899919', '0.895307', '0.900728', '0.898948', '0.903398', '0.901052', '0.899757', '0.897330', '0.903155', '0.893851', '0.902994', '0.895712', '0.902265', '0.899272', '0.901942', '0.894984', '0.899515', '0.901618', '0.902751', '0.905987', '0.908738', '0.904045', '0.899434', '0.899434', '0.901456', '0.900647', '0.897411', '0.894984', '0.896197', '0.900243', '0.903883', '0.899029', '0.896197', '0.900324', '0.900647', '0.901861', '0.901942', '0.899595', '0.898706', '0.903883', '0.900647', '0.902994', '0.901052', '0.899838', '0.900324', '0.900728', '0.899110', '0.898544', '0.902346', '0.899515', '0.900324', '0.905583', '0.900324', '0.903155', '0.902751', '0.899434', '0.903560', '0.903964', '0.905502', '0.898625', '0.898139', '0.903074', '0.897735', '0.898220', '0.900647', '0.897330', '0.903479', '0.898625', '0.899110', '0.903479']}, {'name': 'Test Class Accuracy:', 'type': 'line', 'smooth': 'true', 'data': ['0.26220', '0.40298', '0.53575', '0.59422', '0.63645', '0.67419', '0.69426', '0.68495', '0.64610', '0.69723', '0.71662', '0.75478', '0.68025', '0.77377', '0.76495', '0.77704', '0.75849', '0.79709', '0.74936', '0.80752', '0.80691', '0.78219', '0.79979', '0.80247', '0.80806', '0.81114', '0.80720', '0.82153', '0.80487', '0.80534', '0.83720', '0.81016', '0.79480', '0.81272', '0.81078', '0.82995', '0.79241', '0.82333', '0.81149', '0.83431', '0.81713', '0.83557', '0.83831', '0.83726', '0.84220', '0.82165', '0.84257', '0.84485', '0.83680', '0.83833', '0.82854', '0.83173', '0.82240', '0.82870', '0.82753', '0.82246', '0.83603', '0.84346', '0.82859', '0.84041', '0.84448', '0.84573', '0.84337', '0.84160', '0.85317', '0.84841', '0.84619', '0.83792', '0.84264', '0.84304', '0.85590', '0.84987', '0.85161', '0.85116', '0.85459', '0.84530', '0.84572', '0.83831', '0.84317', '0.84464', '0.85996', '0.85509', '0.85201', '0.85887', '0.85649', '0.85825', '0.84978', '0.84092', '0.84483', '0.84898', '0.84305', '0.84998', '0.84855', '0.85604', '0.84438', '0.86150', '0.86151', '0.85290', '0.85112', '0.85990', '0.86764', '0.86150', '0.86249', '0.86299', '0.86206', '0.86590', '0.84893', '0.85772', '0.86254', '0.85020', '0.86214', '0.85738', '0.86460', '0.85774', '0.86675', '0.85916', '0.86211', '0.86440', '0.86439', '0.85630', '0.86845', '0.86651', '0.86164', '0.86946', '0.85774', '0.86732', '0.85705', '0.86489', '0.86094', '0.85580', '0.85995', '0.86308', '0.86562', '0.85886', '0.86551', '0.86005', '0.85748', '0.85909', '0.86667', '0.85744', '0.86283', '0.86393', '0.86674', '0.86208', '0.86709', '0.85852', '0.86189', '0.87135', '0.86761', '0.85990', '0.86968', '0.86805', '0.86638', '0.86710', '0.86842', '0.86688', '0.86312', '0.85571', '0.85808', '0.86210', '0.86312', '0.85627', '0.86021', '0.86910', '0.86149', '0.86441', '0.86301', '0.86586', '0.86200', '0.86580', '0.86086', '0.86329', '0.85977', '0.86082', '0.86424', '0.86647', '0.86748', '0.85984', '0.86435', '0.86293', '0.86320', '0.86867', '0.86243', '0.86508', '0.86424', '0.86427', '0.86624', '0.86800', '0.86912', '0.86358', '0.86404', '0.86543', '0.85980', '0.86266', '0.85942', '0.86085', '0.86936', '0.86304', '0.86757', '0.86650']}]})