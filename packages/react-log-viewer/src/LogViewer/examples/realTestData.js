export const data = {
  data: `Copying system trust bundle
    Waiting for port :6443 to be released.
    I0223 20:04:25.084507       1 loader.go:379] Config loaded from file:  /etc/kubernetes/static-pod-resources/configmaps/kube-apiserver-cert-syncer-kubeconfig/kubeconfig
    Copying termination logs to "/var/log/kube-apiserver/termination.log"
    I0223 20:04:25.087543       1 main.go:124] Touching termination lock file "/var/log/kube-apiserver/.terminating"
    I0223 20:04:25.088797       1 main.go:182] Launching sub-process "/usr/bin/hyperkube kube-apiserver --openshift-config=/etc/kubernetes/static-pod-resources/configmaps/config/config.yaml --advertise-address=10.0.171.12 -v=2 --permit-address-sharing"
    Flag --openshift-config has been deprecated, to be removed
    
    I0223 20:04:25.238681      17 plugins.go:84] Registered admission plugin "authorization.openshift.io/RestrictSubjectBindings"
    I0223 20:04:25.238763      17 plugins.go:84] Registered admission plugin "image.openshift.io/ImagePolicy"
    I0223 20:04:25.238775      17 plugins.go:84] Registered admission plugin "route.openshift.io/IngressAdmission"
    I0223 20:04:25.238783      17 plugins.go:84] Registered admission plugin "scheduling.openshift.io/OriginPodNodeEnvironment"
    I0223 20:04:25.238792      17 plugins.go:84] Registered admission plugin "autoscaling.openshift.io/ClusterResourceOverride"
    I0223 20:04:25.238801      17 plugins.go:84] Registered admission plugin "quota.openshift.io/ClusterResourceQuota"
    I0223 20:04:25.238810      17 plugins.go:84] Registered admission plugin "autoscaling.openshift.io/RunOnceDuration"
    I0223 20:04:25.238819      17 plugins.go:84] Registered admission plugin "scheduling.openshift.io/PodNodeConstraints"
    I0223 20:04:25.238829      17 plugins.go:84] Registered admission plugin "security.openshift.io/SecurityContextConstraint"
    I0223 20:04:25.238838      17 plugins.go:84] Registered admission plugin "security.openshift.io/SCCExecRestrictions"
    I0223 20:04:25.238846      17 plugins.go:84] Registered admission plugin "network.openshift.io/ExternalIPRanger"
    I0223 20:04:25.238856      17 plugins.go:84] Registered admission plugin "network.openshift.io/RestrictedEndpointsAdmission"
    I0223 20:04:25.238873      17 plugins.go:84] Registered admission plugin "config.openshift.io/ValidateAPIServer"
    I0223 20:04:25.238883      17 plugins.go:84] Registered admission plugin "config.openshift.io/ValidateAuthentication"
    I0223 20:04:25.238892      17 plugins.go:84] Registered admission plugin "config.openshift.io/ValidateFeatureGate"
    I0223 20:04:25.238952      17 plugins.go:84] Registered admission plugin "config.openshift.io/ValidateConsole"
    I0223 20:04:25.238966      17 plugins.go:84] Registered admission plugin "config.openshift.io/ValidateImage"
    I0223 20:04:25.238975      17 plugins.go:84] Registered admission plugin "config.openshift.io/ValidateOAuth"
    I0223 20:04:25.238991      17 plugins.go:84] Registered admission plugin "config.openshift.io/ValidateProject"
    I0223 20:04:25.239003      17 plugins.go:84] Registered admission plugin "config.openshift.io/DenyDeleteClusterConfiguration"
    I0223 20:04:25.239014      17 plugins.go:84] Registered admission plugin "config.openshift.io/ValidateScheduler"
    I0223 20:04:25.239025      17 plugins.go:84] Registered admission plugin "quota.openshift.io/ValidateClusterResourceQuota"
    I0223 20:04:25.239035      17 plugins.go:84] Registered admission plugin "security.openshift.io/ValidateSecurityContextConstraints"
    I0223 20:04:25.239046      17 plugins.go:84] Registered admission plugin "authorization.openshift.io/ValidateRoleBindingRestriction"
    I0223 20:04:25.239056      17 plugins.go:84] Registered admission plugin "config.openshift.io/ValidateNetwork"
    I0223 20:04:25.239065      17 plugins.go:84] Registered admission plugin "security.openshift.io/DefaultSecurityContextConstraints"
    I0223 20:04:25.243294      17 feature_gate.go:244] feature gates: &{map[APIPriorityAndFairness:true]}
    I0223 20:04:25.243381      17 feature_gate.go:244] feature gates: &{map[APIPriorityAndFairness:true RotateKubeletServerCertificate:true]}
    W0223 20:04:25.243488      17 feature_gate.go:236] Setting GA feature gate SupportPodPidsLimit=true. It will be removed in a future release.
    I0223 20:04:25.243540      17 feature_gate.go:244] feature gates: &{map[APIPriorityAndFairness:true RotateKubeletServerCertificate:true SupportPodPidsLimit:true]}
    I0223 20:04:25.243629      17 feature_gate.go:244] feature gates: &{map[APIPriorityAndFairness:true NodeDisruptionExclusion:true RotateKubeletServerCertificate:true SupportPodPidsLimit:true]}
    I0223 20:04:25.243709      17 feature_gate.go:244] feature gates: &{map[APIPriorityAndFairness:true NodeDisruptionExclusion:true RotateKubeletServerCertificate:true ServiceNodeExclusion:true SupportPodPidsLimit:true]}
    W0223 20:04:25.243803      17 feature_gate.go:236] Setting GA feature gate SCTPSupport=true. It will be removed in a future release.
    I0223 20:04:25.243846      17 feature_gate.go:244] feature gates: &{map[APIPriorityAndFairness:true NodeDisruptionExclusion:true RotateKubeletServerCertificate:true SCTPSupport:true ServiceNodeExclusion:true SupportPodPidsLimit:true]}
    I0223 20:04:25.243962      17 feature_gate.go:244] feature gates: &{map[APIPriorityAndFairness:true LegacyNodeRoleBehavior:false NodeDisruptionExclusion:true RotateKubeletServerCertificate:true SCTPSupport:true ServiceNodeExclusion:true SupportPodPidsLimit:true]}
    Flag --openshift-config has been deprecated, to be removed
    Flag --enable-logs-handler has been deprecated, This flag will be removed in v1.19
    Flag --enable-swagger-ui has been deprecated, swagger 1.2 support has been removed
    Flag --insecure-port has been deprecated, This flag has no effect now and will be removed in v1.24.
    Flag --kubelet-https has been deprecated, API Server connections to kubelets always use https. This flag will be removed in 1.22.
    Flag --kubelet-read-only-port has been deprecated, kubelet-read-only-port is deprecated and will be removed.
    I0223 20:04:25.244167      17 flags.go:59] FLAG: --add-dir-header="false"
    I0223 20:04:25.244184      17 flags.go:59] FLAG: --address="127.0.0.1"
    I0223 20:04:25.244196      17 flags.go:59] FLAG: --admission-control="[]"
    I0223 20:04:25.244213      17 flags.go:59] FLAG: --admission-control-config-file="/tmp/kubeapiserver-admission-config.yaml487454417"
    I0223 20:04:25.244224      17 flags.go:59] FLAG: --advertise-address="10.0.171.12"
    I0223 20:04:25.244234      17 flags.go:59] FLAG: --allow-privileged="true"
    I0223 20:04:25.244251      17 flags.go:59] FLAG: --alsologtostderr="false"
    I0223 20:04:25.244261      17 flags.go:59] FLAG: --anonymous-auth="true"
    I0223 20:04:25.244302      17 flags.go:59] FLAG: --api-audiences="[https://kubernetes.default.svc]"
    I0223 20:04:25.244317      17 flags.go:59] FLAG: --apiserver-count="1"
    I0223 20:04:25.244327      17 flags.go:59] FLAG: --audit-log-batch-buffer-size="10000"
    I0223 20:04:25.244336      17 flags.go:59] FLAG: --audit-log-batch-max-size="1"
    I0223 20:04:25.244343      17 flags.go:59] FLAG: --audit-log-batch-max-wait="0s"
    I0223 20:04:25.244354      17 flags.go:59] FLAG: --audit-log-batch-throttle-burst="0"
    I0223 20:04:25.244362      17 flags.go:59] FLAG: --audit-log-batch-throttle-enable="false"
    I0223 20:04:25.244371      17 flags.go:59] FLAG: --audit-log-batch-throttle-qps="0"
    I0223 20:04:25.244382      17 flags.go:59] FLAG: --audit-log-compress="false"
    I0223 20:04:25.244390      17 flags.go:59] FLAG: --audit-log-format="json"
    I0223 20:04:25.244398      17 flags.go:59] FLAG: --audit-log-maxage="0"
    I0223 20:04:25.244407      17 flags.go:59] FLAG: --audit-log-maxbackup="10"
    I0223 20:04:25.244414      17 flags.go:59] FLAG: --audit-log-maxsize="100"
    I0223 20:04:25.244423      17 flags.go:59] FLAG: --audit-log-mode="blocking"
    I0223 20:04:25.244430      17 flags.go:59] FLAG: --audit-log-path="/var/log/kube-apiserver/audit.log"
    I0223 20:04:25.244438      17 flags.go:59] FLAG: --audit-log-truncate-enabled="false"
    I0223 20:04:25.244445      17 flags.go:59] FLAG: --audit-log-truncate-max-batch-size="10485760"
    I0223 20:04:25.244458      17 flags.go:59] FLAG: --audit-log-truncate-max-event-size="102400"
    I0223 20:04:25.244466      17 flags.go:59] FLAG: --audit-log-version="audit.k8s.io/v1"
    I0223 20:04:25.244475      17 flags.go:59] FLAG: --audit-policy-file="/etc/kubernetes/static-pod-resources/configmaps/kube-apiserver-audit-policies/default.yaml"
    I0223 20:04:25.244490      17 flags.go:59] FLAG: --audit-webhook-batch-buffer-size="10000"
    I0223 20:04:25.244499      17 flags.go:59] FLAG: --audit-webhook-batch-initial-backoff="10s"
    I0223 20:04:25.244509      17 flags.go:59] FLAG: --audit-webhook-batch-max-size="400"
    I0223 20:04:25.244518      17 flags.go:59] FLAG: --audit-webhook-batch-max-wait="30s"
    I0223 20:04:25.244526      17 flags.go:59] FLAG: --audit-webhook-batch-throttle-burst="15"
    I0223 20:04:25.244533      17 flags.go:59] FLAG: --audit-webhook-batch-throttle-enable="true"
    I0223 20:04:25.244541      17 flags.go:59] FLAG: --audit-webhook-batch-throttle-qps="10"
    I0223 20:04:25.244550      17 flags.go:59] FLAG: --audit-webhook-config-file=""
    I0223 20:04:25.244558      17 flags.go:59] FLAG: --audit-webhook-initial-backoff="10s"
    I0223 20:04:25.244565      17 flags.go:59] FLAG: --audit-webhook-mode="batch"
    I0223 20:04:25.244573      17 flags.go:59] FLAG: --audit-webhook-truncate-enabled="false"
    I0223 20:04:25.244580      17 flags.go:59] FLAG: --audit-webhook-truncate-max-batch-size="10485760"
    I0223 20:04:25.244588      17 flags.go:59] FLAG: --audit-webhook-truncate-max-event-size="102400"
    I0223 20:04:25.244596      17 flags.go:59] FLAG: --audit-webhook-version="audit.k8s.io/v1"
    I0223 20:04:25.244604      17 flags.go:59] FLAG: --authentication-token-webhook-cache-ttl="2m0s"
    I0223 20:04:25.244613      17 flags.go:59] FLAG: --authentication-token-webhook-config-file=""
    I0223 20:04:25.244620      17 flags.go:59] FLAG: --authentication-token-webhook-version="v1beta1"
    I0223 20:04:25.244628      17 flags.go:59] FLAG: --authorization-mode="[Scope,SystemMasters,RBAC,Node]"
    I0223 20:04:25.244642      17 flags.go:59] FLAG: --authorization-policy-file=""
    I0223 20:04:25.244650      17 flags.go:59] FLAG: --authorization-webhook-cache-authorized-ttl="5m0s"
    I0223 20:04:25.244657      17 flags.go:59] FLAG: --authorization-webhook-cache-unauthorized-ttl="30s"
    I0223 20:04:25.244665      17 flags.go:59] FLAG: --authorization-webhook-config-file=""
    I0223 20:04:25.244672      17 flags.go:59] FLAG: --authorization-webhook-version="v1beta1"
    I0223 20:04:25.244680      17 flags.go:59] FLAG: --bind-address="0.0.0.0"
    I0223 20:04:25.244687      17 flags.go:59] FLAG: --cert-dir="/var/run/kubernetes"
    I0223 20:04:25.244695      17 flags.go:59] FLAG: --client-ca-file="/etc/kubernetes/static-pod-certs/configmaps/client-ca/ca-bundle.crt"
    I0223 20:04:25.244706      17 flags.go:59] FLAG: --cloud-config=""
    I0223 20:04:25.244713      17 flags.go:59] FLAG: --cloud-provider="aws"
    I0223 20:04:25.244720      17 flags.go:59] FLAG: --cloud-provider-gce-l7lb-src-cidrs="130.211.0.0/22,35.191.0.0/16"
    I0223 20:04:25.244732      17 flags.go:59] FLAG: --cloud-provider-gce-lb-src-cidrs="130.211.0.0/22,209.85.152.0/22,209.85.204.0/22,35.191.0.0/16"
    I0223 20:04:25.244743      17 flags.go:59] FLAG: --contention-profiling="false"
    I0223 20:04:25.244752      17 flags.go:59] FLAG: --cors-allowed-origins="[//127\\.0\\.0\\.1(:|$),//localhost(:|$)]"
    I0223 20:04:25.244764      17 flags.go:59] FLAG: --default-not-ready-toleration-seconds="300"
    I0223 20:04:25.244772      17 flags.go:59] FLAG: --default-unreachable-toleration-seconds="300"
    I0223 20:04:25.244780      17 flags.go:59] FLAG: --default-watch-cache-size="100"
    I0223 20:04:25.244788      17 flags.go:59] FLAG: --delete-collection-workers="1"
    I0223 20:04:25.244796      17 flags.go:59] FLAG: --deserialization-cache-size="0"
    I0223 20:04:25.244803      17 flags.go:59] FLAG: --disable-admission-plugins="[]"
    I0223 20:04:25.244816      17 flags.go:59] FLAG: --egress-selector-config-file=""
    I0223 20:04:25.244823      17 flags.go:59] FLAG: --enable-admission-plugins="[CertificateApproval,CertificateSigning,CertificateSubjectRestriction,DefaultIngressClass,DefaultStorageClass,DefaultTolerationSeconds,LimitRanger,MutatingAdmissionWebhook,NamespaceLifecycle,NodeRestriction,OwnerReferencesPermissionEnforcement,PersistentVolumeClaimResize,PersistentVolumeLabel,PodNodeSelector,PodTolerationRestriction,Priority,ResourceQuota,RuntimeClass,ServiceAccount,StorageObjectInUseProtection,TaintNodesByCondition,ValidatingAdmissionWebhook,authorization.openshift.io/RestrictSubjectBindings,authorization.openshift.io/ValidateRoleBindingRestriction,config.openshift.io/DenyDeleteClusterConfiguration,config.openshift.io/ValidateAPIServer,config.openshift.io/ValidateAuthentication,config.openshift.io/ValidateConsole,config.openshift.io/ValidateFeatureGate,config.openshift.io/ValidateImage,config.openshift.io/ValidateOAuth,config.openshift.io/ValidateProject,config.openshift.io/ValidateScheduler,image.openshift.io/ImagePolicy,network.openshift.io/ExternalIPRanger,network.openshift.io/RestrictedEndpointsAdmission,quota.openshift.io/ClusterResourceQuota,quota.openshift.io/ValidateClusterResourceQuota,route.openshift.io/IngressAdmission,scheduling.openshift.io/OriginPodNodeEnvironment,security.openshift.io/DefaultSecurityContextConstraints,security.openshift.io/SCCExecRestrictions,security.openshift.io/SecurityContextConstraint,security.openshift.io/ValidateSecurityContextConstraints]"
    I0223 20:04:25.244950      17 flags.go:59] FLAG: --enable-aggregator-routing="true"
    I0223 20:04:25.244965      17 flags.go:59] FLAG: --enable-bootstrap-token-auth="false"
    I0223 20:04:25.244973      17 flags.go:59] FLAG: --enable-garbage-collector="true"
    I0223 20:04:25.244981      17 flags.go:59] FLAG: --enable-logs-handler="false"
    I0223 20:04:25.244989      17 flags.go:59] FLAG: --enable-priority-and-fairness="true"
    I0223 20:04:25.244997      17 flags.go:59] FLAG: --enable-swagger-ui="true"
    I0223 20:04:25.245004      17 flags.go:59] FLAG: --encryption-provider-config=""
    I0223 20:04:25.245011      17 flags.go:59] FLAG: --endpoint-reconciler-type="lease"
    I0223 20:04:25.245035      17 flags.go:59] FLAG: --etcd-cafile="/etc/kubernetes/static-pod-resources/configmaps/etcd-serving-ca/ca-bundle.crt"
    I0223 20:04:25.245046      17 flags.go:59] FLAG: --etcd-certfile="/etc/kubernetes/static-pod-resources/secrets/etcd-client/tls.crt"
    I0223 20:04:25.245055      17 flags.go:59] FLAG: --etcd-compaction-interval="5m0s"
    I0223 20:04:25.245064      17 flags.go:59] FLAG: --etcd-count-metric-poll-period="1m0s"
    I0223 20:04:25.245071      17 flags.go:59] FLAG: --etcd-db-metric-poll-interval="30s"
    I0223 20:04:25.245079      17 flags.go:59] FLAG: --etcd-healthcheck-timeout="10s"
    I0223 20:04:25.245087      17 flags.go:59] FLAG: --etcd-keyfile="/etc/kubernetes/static-pod-resources/secrets/etcd-client/tls.key"
    I0223 20:04:25.245098      17 flags.go:59] FLAG: --etcd-prefix="kubernetes.io"
    I0223 20:04:25.245106      17 flags.go:59] FLAG: --etcd-servers="[https://10.0.137.156:2379,https://10.0.158.175:2379,https://10.0.171.12:2379,https://localhost:2379]"
    I0223 20:04:25.245150      17 flags.go:59] FLAG: --etcd-servers-overrides="[]"
    I0223 20:04:25.245167      17 flags.go:59] FLAG: --event-ttl="3h0m0s"
    I0223 20:04:25.245177      17 flags.go:59] FLAG: --experimental-encryption-provider-config=""
    I0223 20:04:25.245183      17 flags.go:59] FLAG: --experimental-logging-sanitization="false"
    I0223 20:04:25.245191      17 flags.go:59] FLAG: --external-hostname=""
    I0223 20:04:25.245198      17 flags.go:59] FLAG: --feature-gates="APIPriorityAndFairness=true,LegacyNodeRoleBehavior=false,NodeDisruptionExclusion=true,RotateKubeletServerCertificate=true,SCTPSupport=true,ServiceNodeExclusion=true,SupportPodPidsLimit=true"
    I0223 20:04:25.245234      17 flags.go:59] FLAG: --goaway-chance="0"
    I0223 20:04:25.245248      17 flags.go:59] FLAG: --help="false"
    I0223 20:04:25.245257      17 flags.go:59] FLAG: --http2-max-streams-per-connection="2000"
    I0223 20:04:25.245266      17 flags.go:59] FLAG: --identity-lease-duration-seconds="3600"
    I0223 20:04:25.245274      17 flags.go:59] FLAG: --identity-lease-renew-interval-seconds="10"
    I0223 20:04:25.245283      17 flags.go:59] FLAG: --insecure-bind-address="127.0.0.1"
    I0223 20:04:25.245292      17 flags.go:59] FLAG: --insecure-port="0"
    I0223 20:04:25.245300      17 flags.go:59] FLAG: --kubelet-certificate-authority="/etc/kubernetes/static-pod-resources/configmaps/kubelet-serving-ca/ca-bundle.crt"
    I0223 20:04:25.245314      17 flags.go:59] FLAG: --kubelet-client-certificate="/etc/kubernetes/static-pod-resources/secrets/kubelet-client/tls.crt"
    I0223 20:04:25.245325      17 flags.go:59] FLAG: --kubelet-client-key="/etc/kubernetes/static-pod-resources/secrets/kubelet-client/tls.key"
    I0223 20:04:25.245335      17 flags.go:59] FLAG: --kubelet-https="true"
    I0223 20:04:25.245343      17 flags.go:59] FLAG: --kubelet-port="10250"
    I0223 20:04:25.245354      17 flags.go:59] FLAG: --kubelet-preferred-address-types="[InternalIP]"
    I0223 20:04:25.245375      17 flags.go:59] FLAG: --kubelet-read-only-port="0"
    I0223 20:04:25.245384      17 flags.go:59] FLAG: --kubelet-timeout="5s"
    I0223 20:04:25.245392      17 flags.go:59] FLAG: --kubernetes-service-node-port="0"
    I0223 20:04:25.245403      17 flags.go:59] FLAG: --livez-grace-period="0s"
    I0223 20:04:25.245412      17 flags.go:59] FLAG: --log-backtrace-at=":0"
    I0223 20:04:25.245423      17 flags.go:59] FLAG: --log-dir=""
    I0223 20:04:25.245431      17 flags.go:59] FLAG: --log-file=""
    I0223 20:04:25.245439      17 flags.go:59] FLAG: --log-file-max-size="1800"
    I0223 20:04:25.245448      17 flags.go:59] FLAG: --log-flush-frequency="5s"
    I0223 20:04:25.245456      17 flags.go:59] FLAG: --logging-format="text"
    I0223 20:04:25.245465      17 flags.go:59] FLAG: --logtostderr="true"
    I0223 20:04:25.245473      17 flags.go:59] FLAG: --master-service-namespace="default"
    I0223 20:04:25.245481      17 flags.go:59] FLAG: --max-connection-bytes-per-sec="0"
    I0223 20:04:25.245489      17 flags.go:59] FLAG: --max-mutating-requests-inflight="1000"
    I0223 20:04:25.245497      17 flags.go:59] FLAG: --max-requests-inflight="3000"
    I0223 20:04:25.245505      17 flags.go:59] FLAG: --min-request-timeout="3600"
    I0223 20:04:25.245513      17 flags.go:59] FLAG: --oidc-ca-file=""
    I0223 20:04:25.245521      17 flags.go:59] FLAG: --oidc-client-id=""
    I0223 20:04:25.245529      17 flags.go:59] FLAG: --oidc-groups-claim=""
    I0223 20:04:25.245537      17 flags.go:59] FLAG: --oidc-groups-prefix=""
    I0223 20:04:25.245545      17 flags.go:59] FLAG: --oidc-issuer-url=""
    I0223 20:04:25.245552      17 flags.go:59] FLAG: --oidc-required-claim=""
    I0223 20:04:25.245568      17 flags.go:59] FLAG: --oidc-signing-algs="[RS256]"
    I0223 20:04:25.245579      17 flags.go:59] FLAG: --oidc-username-claim="sub"
    I0223 20:04:25.245588      17 flags.go:59] FLAG: --oidc-username-prefix=""
    I0223 20:04:25.245596      17 flags.go:59] FLAG: --one-output="false"
    I0223 20:04:25.245604      17 flags.go:59] FLAG: --openshift-config="/etc/kubernetes/static-pod-resources/configmaps/config/config.yaml"
    I0223 20:04:25.245617      17 flags.go:59] FLAG: --permit-address-sharing="true"
    I0223 20:04:25.245626      17 flags.go:59] FLAG: --permit-port-sharing="false"
    I0223 20:04:25.245633      17 flags.go:59] FLAG: --port="0"
    I0223 20:04:25.245642      17 flags.go:59] FLAG: --profiling="true"
    I0223 20:04:25.245650      17 flags.go:59] FLAG: --proxy-client-cert-file="/etc/kubernetes/static-pod-certs/secrets/aggregator-client/tls.crt"
    I0223 20:04:25.245661      17 flags.go:59] FLAG: --proxy-client-key-file="/etc/kubernetes/static-pod-certs/secrets/aggregator-client/tls.key"
    I0223 20:04:25.245671      17 flags.go:59] FLAG: --request-timeout="1m0s"
    I0223 20:04:25.245680      17 flags.go:59] FLAG: --requestheader-allowed-names="[kube-apiserver-proxy,system:kube-apiserver-proxy,system:openshift-aggregator]"
    I0223 20:04:25.245698      17 flags.go:59] FLAG: --requestheader-client-ca-file="/etc/kubernetes/static-pod-certs/configmaps/aggregator-client-ca/ca-bundle.crt"
    I0223 20:04:25.245709      17 flags.go:59] FLAG: --requestheader-extra-headers-prefix="[X-Remote-Extra-]"
    I0223 20:04:25.245719      17 flags.go:59] FLAG: --requestheader-group-headers="[X-Remote-Group]"
    I0223 20:04:25.245736      17 flags.go:59] FLAG: --requestheader-username-headers="[X-Remote-User]"
    I0223 20:04:25.245770      17 flags.go:59] FLAG: --runtime-config="flowcontrol.apiserver.k8s.io/v1alpha1=true"
    I0223 20:04:25.245787      17 flags.go:59] FLAG: --secure-port="6443"
    I0223 20:04:25.245795      17 flags.go:59] FLAG: --service-account-api-audiences="[https://kubernetes.default.svc]"
    I0223 20:04:25.245811      17 flags.go:59] FLAG: --service-account-extend-token-expiration="true"
    I0223 20:04:25.245820      17 flags.go:59] FLAG: --service-account-issuer="https://kubernetes.default.svc"
    I0223 20:04:25.245829      17 flags.go:59] FLAG: --service-account-jwks-uri="https://api-int.rhamilto.devcluster.openshift.com:6443/openid/v1/jwks"
    I0223 20:04:25.245838      17 flags.go:59] FLAG: --service-account-key-file="[/etc/kubernetes/static-pod-resources/configmaps/sa-token-signing-certs/service-account-001.pub,/etc/kubernetes/static-pod-resources/configmaps/sa-token-signing-certs/service-account-002.pub,/etc/kubernetes/static-pod-resources/configmaps/bound-sa-token-signing-certs/service-account-001.pub]"
    I0223 20:04:25.245862      17 flags.go:59] FLAG: --service-account-lookup="true"
    I0223 20:04:25.245871      17 flags.go:59] FLAG: --service-account-max-token-expiration="0s"
    I0223 20:04:25.245879      17 flags.go:59] FLAG: --service-account-signing-key-file="/etc/kubernetes/static-pod-certs/secrets/bound-service-account-signing-key/service-account.key"
    I0223 20:04:25.245893      17 flags.go:59] FLAG: --service-cluster-ip-range="172.30.0.0/16"
    I0223 20:04:25.245901      17 flags.go:59] FLAG: --service-node-port-range="30000-32767"
    I0223 20:04:25.245970      17 flags.go:59] FLAG: --show-hidden-metrics-for-version=""
    I0223 20:04:25.246001      17 flags.go:59] FLAG: --shutdown-delay-duration="1m10s"
    I0223 20:04:25.246016      17 flags.go:59] FLAG: --skip-headers="false"
    I0223 20:04:25.246025      17 flags.go:59] FLAG: --skip-log-headers="false"
    I0223 20:04:25.246033      17 flags.go:59] FLAG: --ssh-keyfile=""
    I0223 20:04:25.246041      17 flags.go:59] FLAG: --ssh-user=""
    I0223 20:04:25.246049      17 flags.go:59] FLAG: --stderrthreshold="2"
    I0223 20:04:25.246057      17 flags.go:59] FLAG: --storage-backend="etcd3"
    I0223 20:04:25.246065      17 flags.go:59] FLAG: --storage-media-type="application/vnd.kubernetes.protobuf"
    I0223 20:04:25.246075      17 flags.go:59] FLAG: --target-ram-mb="0"
    I0223 20:04:25.246083      17 flags.go:59] FLAG: --tls-cert-file="/etc/kubernetes/static-pod-certs/secrets/service-network-serving-certkey/tls.crt"
    I0223 20:04:25.246096      17 flags.go:59] FLAG: --tls-cipher-suites="[TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256]"
    I0223 20:04:25.246126      17 flags.go:59] FLAG: --tls-min-version="VersionTLS12"
    I0223 20:04:25.246136      17 flags.go:59] FLAG: --tls-private-key-file="/etc/kubernetes/static-pod-certs/secrets/service-network-serving-certkey/tls.key"
    I0223 20:04:25.246146      17 flags.go:59] FLAG: --tls-sni-cert-key="[/etc/kubernetes/static-pod-certs/secrets/localhost-serving-cert-certkey/tls.crt,/etc/kubernetes/static-pod-certs/secrets/localhost-serving-cert-certkey/tls.key;/etc/kubernetes/static-pod-certs/secrets/service-network-serving-certkey/tls.crt,/etc/kubernetes/static-pod-certs/secrets/service-network-serving-certkey/tls.key;/etc/kubernetes/static-pod-certs/secrets/external-loadbalancer-serving-certkey/tls.crt,/etc/kubernetes/static-pod-certs/secrets/external-loadbalancer-serving-certkey/tls.key;/etc/kubernetes/static-pod-certs/secrets/internal-loadbalancer-serving-certkey/tls.crt,/etc/kubernetes/static-pod-certs/secrets/internal-loadbalancer-serving-certkey/tls.key;/etc/kubernetes/static-pod-resources/secrets/localhost-recovery-serving-certkey/tls.crt,/etc/kubernetes/static-pod-resources/secrets/localhost-recovery-serving-certkey/tls.key]"
    I0223 20:04:25.246189      17 flags.go:59] FLAG: --token-auth-file=""
    I0223 20:04:25.246198      17 flags.go:59] FLAG: --v="2"
    I0223 20:04:25.246206      17 flags.go:59] FLAG: --version="false"
    I0223 20:04:25.246218      17 flags.go:59] FLAG: --vmodule=""
    I0223 20:04:25.246225      17 flags.go:59] FLAG: --watch-cache="true"
    I0223 20:04:25.246232      17 flags.go:59] FLAG: --watch-cache-sizes="[]"
    I0223 20:04:25.246291      17 server.go:697] external host was not specified, using 10.0.171.12
    I0223 20:04:25.247002      17 server.go:220] Version: v1.20.0+69d7e87
    I0223 20:04:25.248036      17 dynamic_serving_content.go:111] Loaded a new cert/key pair for "serving-cert::/etc/kubernetes/static-pod-certs/secrets/service-network-serving-certkey/tls.crt::/etc/kubernetes/static-pod-certs/secrets/service-network-serving-certkey/tls.key"
    I0223 20:04:25.248386      17 dynamic_serving_content.go:111] Loaded a new cert/key pair for "sni-serving-cert::/etc/kubernetes/static-pod-certs/secrets/localhost-serving-cert-certkey/tls.crt::/etc/kubernetes/static-pod-certs/secrets/localhost-serving-cert-certkey/tls.key"
    I0223 20:04:25.249151      17 dynamic_serving_content.go:111] Loaded a new cert/key pair for "sni-serving-cert::/etc/kubernetes/static-pod-certs/secrets/service-network-serving-certkey/tls.crt::/etc/kubernetes/static-pod-certs/secrets/service-network-serving-certkey/tls.key"
    I0223 20:04:25.249810      17 dynamic_serving_content.go:111] Loaded a new cert/key pair for "sni-serving-cert::/etc/kubernetes/static-pod-certs/secrets/external-loadbalancer-serving-certkey/tls.crt::/etc/kubernetes/static-pod-certs/secrets/external-loadbalancer-serving-certkey/tls.key"
    I0223 20:04:25.250429      17 dynamic_serving_content.go:111] Loaded a new cert/key pair for "sni-serving-cert::/etc/kubernetes/static-pod-certs/secrets/internal-loadbalancer-serving-certkey/tls.crt::/etc/kubernetes/static-pod-certs/secrets/internal-loadbalancer-serving-certkey/tls.key"
    I0223 20:04:25.251207      17 dynamic_serving_content.go:111] Loaded a new cert/key pair for "sni-serving-cert::/etc/kubernetes/static-pod-resources/secrets/localhost-recovery-serving-certkey/tls.crt::/etc/kubernetes/static-pod-resources/secrets/localhost-recovery-serving-certkey/tls.key"
    I0223 20:04:25.826314      17 dynamic_cafile_content.go:129] Loaded a new CA Bundle and Verifier for "client-ca-bundle::/etc/kubernetes/static-pod-certs/configmaps/client-ca/ca-bundle.crt"
    I0223 20:04:25.827428      17 dynamic_cafile_content.go:129] Loaded a new CA Bundle and Verifier for "request-header::/etc/kubernetes/static-pod-certs/configmaps/aggregator-client-ca/ca-bundle.crt"
    I0223 20:04:25.831625      17 audit.go:344] Using audit backend: ignoreErrors<log>
    I0223 20:04:25.835313      17 shared_informer.go:240] Waiting for caches to sync for node_authorizer
    W0223 20:04:25.836238      17 admission.go:78] PersistentVolumeLabel admission controller is deprecated. Please remove this controller from your configuration files and scripts.
    I0223 20:04:25.836618      17 admission.go:47] Admission plugin "autoscaling.openshift.io/ClusterResourceOverride" is not configured so it will be disabled.
    I0223 20:04:25.836796      17 admission.go:33] Admission plugin "autoscaling.openshift.io/RunOnceDuration" is not configured so it will be disabled.
    I0223 20:04:25.836925      17 admission.go:32] Admission plugin "scheduling.openshift.io/PodNodeConstraints" is not configured so it will be disabled.
    I0223 20:04:25.839314      17 plugins.go:158] Loaded 19 mutating admission controller(s) successfully in the following order: NamespaceLifecycle,LimitRanger,ServiceAccount,NodeRestriction,TaintNodesByCondition,PodNodeSelector,Priority,DefaultTolerationSeconds,PodTolerationRestriction,PersistentVolumeLabel,DefaultStorageClass,StorageObjectInUseProtection,RuntimeClass,DefaultIngressClass,scheduling.openshift.io/OriginPodNodeEnvironment,image.openshift.io/ImagePolicy,security.openshift.io/SecurityContextConstraint,security.openshift.io/DefaultSecurityContextConstraints,MutatingAdmissionWebhook.
    I0223 20:04:25.839340      17 plugins.go:161] Loaded 35 validating admission controller(s) successfully in the following order: LimitRanger,ServiceAccount,PodNodeSelector,Priority,PodTolerationRestriction,OwnerReferencesPermissionEnforcement,PersistentVolumeClaimResize,RuntimeClass,CertificateApproval,CertificateSigning,CertificateSubjectRestriction,authorization.openshift.io/RestrictSubjectBindings,scheduling.openshift.io/OriginPodNodeEnvironment,network.openshift.io/ExternalIPRanger,network.openshift.io/RestrictedEndpointsAdmission,image.openshift.io/ImagePolicy,security.openshift.io/SecurityContextConstraint,security.openshift.io/SCCExecRestrictions,route.openshift.io/IngressAdmission,config.openshift.io/ValidateAPIServer,config.openshift.io/ValidateAuthentication,config.openshift.io/ValidateFeatureGate,config.openshift.io/ValidateConsole,config.openshift.io/ValidateImage,config.openshift.io/ValidateOAuth,config.openshift.io/ValidateProject,config.openshift.io/DenyDeleteClusterConfiguration,config.openshift.io/ValidateScheduler,quota.openshift.io/ValidateClusterResourceQuota,security.openshift.io/ValidateSecurityContextConstraints,authorization.openshift.io/ValidateRoleBindingRestriction,config.openshift.io/ValidateNetwork,ValidatingAdmissionWebhook,ResourceQuota,quota.openshift.io/ClusterResourceQuota.
    I0223 20:04:25.839370      17 apf_controller.go:171] NewTestableController with serverConcurrencyLimit=4000, requestWaitLimit=15s
    I0223 20:04:25.840388      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:25.840447      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:25.862065      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:25.862116      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:25.877297      17 store.go:1376] Monitoring events count at <storage-prefix>//events
    I0223 20:04:25.877736      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:04:25.880059      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:04:25.878182      17 dynamic_cafile_content.go:129] Loaded a new CA Bundle and Verifier for "client-ca-bundle::/etc/kubernetes/static-pod-certs/configmaps/client-ca/ca-bundle.crt"
    I0223 20:04:25.878262      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:04:25.878806      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:04:25.878857      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:04:25.880677      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:04:25.880772      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:04:25.881078      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:04:25.881212      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:04:25.881316      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0003ccc90, {CONNECTING <nil>}
    I0223 20:04:25.881277      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:04:25.881490      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:04:25.881756      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0003cd010, {CONNECTING <nil>}
    I0223 20:04:25.881186      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:04:25.881145      17 dynamic_cafile_content.go:129] Loaded a new CA Bundle and Verifier for "request-header::/etc/kubernetes/static-pod-certs/configmaps/aggregator-client-ca/ca-bundle.crt"
    I0223 20:04:25.883347      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0003cd410, {CONNECTING <nil>}
    W0223 20:04:25.884139      17 admission.go:78] PersistentVolumeLabel admission controller is deprecated. Please remove this controller from your configuration files and scripts.
    I0223 20:04:25.884322      17 admission.go:47] Admission plugin "autoscaling.openshift.io/ClusterResourceOverride" is not configured so it will be disabled.
    I0223 20:04:25.884460      17 admission.go:33] Admission plugin "autoscaling.openshift.io/RunOnceDuration" is not configured so it will be disabled.
    I0223 20:04:25.884487      17 admission.go:32] Admission plugin "scheduling.openshift.io/PodNodeConstraints" is not configured so it will be disabled.
    I0223 20:04:25.882179      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc000235800, {CONNECTING <nil>}
    I0223 20:04:25.891222      17 plugins.go:158] Loaded 19 mutating admission controller(s) successfully in the following order: NamespaceLifecycle,LimitRanger,ServiceAccount,NodeRestriction,TaintNodesByCondition,PodNodeSelector,Priority,DefaultTolerationSeconds,PodTolerationRestriction,PersistentVolumeLabel,DefaultStorageClass,StorageObjectInUseProtection,RuntimeClass,DefaultIngressClass,scheduling.openshift.io/OriginPodNodeEnvironment,image.openshift.io/ImagePolicy,security.openshift.io/SecurityContextConstraint,security.openshift.io/DefaultSecurityContextConstraints,MutatingAdmissionWebhook.
    I0223 20:04:25.897024      17 plugins.go:161] Loaded 35 validating admission controller(s) successfully in the following order: LimitRanger,ServiceAccount,PodNodeSelector,Priority,PodTolerationRestriction,OwnerReferencesPermissionEnforcement,PersistentVolumeClaimResize,RuntimeClass,CertificateApproval,CertificateSigning,CertificateSubjectRestriction,authorization.openshift.io/RestrictSubjectBindings,scheduling.openshift.io/OriginPodNodeEnvironment,network.openshift.io/ExternalIPRanger,network.openshift.io/RestrictedEndpointsAdmission,image.openshift.io/ImagePolicy,security.openshift.io/SecurityContextConstraint,security.openshift.io/SCCExecRestrictions,route.openshift.io/IngressAdmission,config.openshift.io/ValidateAPIServer,config.openshift.io/ValidateAuthentication,config.openshift.io/ValidateFeatureGate,config.openshift.io/ValidateConsole,config.openshift.io/ValidateImage,config.openshift.io/ValidateOAuth,config.openshift.io/ValidateProject,config.openshift.io/DenyDeleteClusterConfiguration,config.openshift.io/ValidateScheduler,quota.openshift.io/ValidateClusterResourceQuota,security.openshift.io/ValidateSecurityContextConstraints,authorization.openshift.io/ValidateRoleBindingRestriction,config.openshift.io/ValidateNetwork,ValidatingAdmissionWebhook,ResourceQuota,quota.openshift.io/ClusterResourceQuota.
    I0223 20:04:25.895810      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0003ccc90, {READY <nil>}
    I0223 20:04:25.896233      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0003cd010, {READY <nil>}
    I0223 20:04:25.900880      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:25.900972      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:25.902638      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc000235800, {READY <nil>}
    I0223 20:04:25.902681      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:04:25.902765      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:04:25.907226      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:04:25.915186      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0003cd410, {READY <nil>}
    I0223 20:04:25.922515      17 store.go:1376] Monitoring customresourcedefinitions.apiextensions.k8s.io count at <storage-prefix>//apiextensions.k8s.io/customresourcedefinitions
    I0223 20:04:25.924192      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:25.924317      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:25.924750      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:04:25.949360      17 store.go:1376] Monitoring customresourcedefinitions.apiextensions.k8s.io count at <storage-prefix>//apiextensions.k8s.io/customresourcedefinitions
    I0223 20:04:26.042655      17 instance.go:289] Using reconciler: lease
    I0223 20:04:26.043864      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:26.044141      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:26.106973      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:26.111720      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:26.132901      17 store.go:1376] Monitoring podtemplates count at <storage-prefix>//podtemplates
    I0223 20:04:26.136304      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:26.136431      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:26.169499      17 cacher.go:405] cacher (*core.PodTemplate): initialized
    I0223 20:04:26.173602      17 store.go:1376] Monitoring events count at <storage-prefix>//events
    I0223 20:04:26.174273      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:26.174318      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:26.220321      17 store.go:1376] Monitoring limitranges count at <storage-prefix>//limitranges
    I0223 20:04:26.222574      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:26.222642      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:26.250075      17 cacher.go:405] cacher (*core.LimitRange): initialized
    I0223 20:04:26.285544      17 store.go:1376] Monitoring resourcequotas count at <storage-prefix>//resourcequotas
    I0223 20:04:26.287123      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:26.287255      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:26.302786      17 cacher.go:405] cacher (*core.ResourceQuota): initialized
    I0223 20:04:26.357024      17 store.go:1376] Monitoring secrets count at <storage-prefix>//secrets
    I0223 20:04:26.357892      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:26.357973      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:26.380795      17 store.go:1376] Monitoring persistentvolumes count at <storage-prefix>//persistentvolumes
    I0223 20:04:26.381610      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:26.381651      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:26.428940      17 cacher.go:405] cacher (*core.PersistentVolume): initialized
    I0223 20:04:26.435684      17 store.go:1376] Monitoring persistentvolumeclaims count at <storage-prefix>//persistentvolumeclaims
    I0223 20:04:26.436734      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:26.436890      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:26.458562      17 cacher.go:405] cacher (*core.PersistentVolumeClaim): initialized
    I0223 20:04:26.475761      17 store.go:1376] Monitoring configmaps count at <storage-prefix>//configmaps
    I0223 20:04:26.478218      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:26.478342      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:26.515544      17 store.go:1376] Monitoring namespaces count at <storage-prefix>//namespaces
    I0223 20:04:26.516604      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:26.516678      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:26.576224      17 store.go:1376] Monitoring endpoints count at <storage-prefix>//services/endpoints
    I0223 20:04:26.582234      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:26.583846      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:26.626400      17 cacher.go:405] cacher (*core.Namespace): initialized
    I0223 20:04:26.648231      17 store.go:1376] Monitoring nodes count at <storage-prefix>//minions
    I0223 20:04:26.649979      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:26.656247      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:26.687989      17 cacher.go:405] cacher (*core.Node): initialized
    I0223 20:04:26.693900      17 cacher.go:405] cacher (*core.Endpoints): initialized
    I0223 20:04:26.694905      17 store.go:1376] Monitoring pods count at <storage-prefix>//pods
    I0223 20:04:26.695828      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:26.695967      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:26.706579      17 trace.go:205] Trace[933648718]: "List etcd3" key:/apiextensions.k8s.io/customresourcedefinitions,resourceVersion:,resourceVersionMatch:,limit:10000,continue: (23-Feb-2021 20:04:25.950) (total time: 756ms):
    Trace[933648718]: [756.277304ms] [756.277304ms] END
    I0223 20:04:26.709198      17 cacher.go:405] cacher (*apiextensions.CustomResourceDefinition): initialized
    I0223 20:04:26.731385      17 store.go:1376] Monitoring serviceaccounts count at <storage-prefix>//serviceaccounts
    I0223 20:04:26.743025      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:26.743157      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:26.779347      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:26.779417      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:26.804876      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:26.804938      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:26.840271      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:26.840442      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:26.852467      17 store.go:1376] Monitoring replicationcontrollers count at <storage-prefix>//controllers
    I0223 20:04:26.853637      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:26.853810      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:26.876445      17 cacher.go:405] cacher (*core.ServiceAccount): initialized
    I0223 20:04:26.898563      17 cacher.go:405] cacher (*core.ReplicationController): initialized
    I0223 20:04:26.899522      17 store.go:1376] Monitoring services count at <storage-prefix>//services/specs
    I0223 20:04:26.899629      17 rest.go:131] the default service ipfamily for this cluster is: IPv4
    I0223 20:04:26.913177      17 trace.go:205] Trace[629270168]: "List etcd3" key:/apiextensions.k8s.io/customresourcedefinitions,resourceVersion:,resourceVersionMatch:,limit:10000,continue: (23-Feb-2021 20:04:25.925) (total time: 988ms):
    Trace[629270168]: [988.101676ms] [988.101676ms] END
    I0223 20:04:26.920799      17 cacher.go:405] cacher (*apiextensions.CustomResourceDefinition): initialized
    I0223 20:04:26.943141      17 cacher.go:405] cacher (*core.ConfigMap): initialized
    I0223 20:04:26.964318      17 cacher.go:782] cacher (*core.ConfigMap): 1 objects queued in incoming channel.
    I0223 20:04:26.964359      17 cacher.go:782] cacher (*core.ConfigMap): 2 objects queued in incoming channel.
    I0223 20:04:27.003375      17 cacher.go:405] cacher (*core.Service): initialized
    I0223 20:04:27.024387      17 cacher.go:405] cacher (*core.Pod): initialized
    I0223 20:04:27.116767      17 instance.go:594] Skipping disabled API group "internal.apiserver.k8s.io".
    I0223 20:04:27.116892      17 instance.go:615] Enabling API group "authentication.k8s.io".
    I0223 20:04:27.116987      17 instance.go:615] Enabling API group "authorization.k8s.io".
    I0223 20:04:27.122773      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:27.122860      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:27.145667      17 store.go:1376] Monitoring horizontalpodautoscalers.autoscaling count at <storage-prefix>//horizontalpodautoscalers
    I0223 20:04:27.147234      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:27.147364      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:27.165258      17 cacher.go:405] cacher (*autoscaling.HorizontalPodAutoscaler): initialized
    I0223 20:04:27.179386      17 store.go:1376] Monitoring horizontalpodautoscalers.autoscaling count at <storage-prefix>//horizontalpodautoscalers
    I0223 20:04:27.182450      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:27.182523      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:27.201292      17 cacher.go:405] cacher (*autoscaling.HorizontalPodAutoscaler): initialized
    I0223 20:04:27.201570      17 store.go:1376] Monitoring horizontalpodautoscalers.autoscaling count at <storage-prefix>//horizontalpodautoscalers
    I0223 20:04:27.201669      17 instance.go:615] Enabling API group "autoscaling".
    I0223 20:04:27.202664      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:27.202766      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:27.228659      17 store.go:1376] Monitoring jobs.batch count at <storage-prefix>//jobs
    I0223 20:04:27.229538      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:27.229635      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:27.232569      17 cacher.go:405] cacher (*autoscaling.HorizontalPodAutoscaler): initialized
    I0223 20:04:27.244735      17 cacher.go:405] cacher (*batch.Job): initialized
    I0223 20:04:27.248619      17 store.go:1376] Monitoring cronjobs.batch count at <storage-prefix>//cronjobs
    I0223 20:04:27.248673      17 instance.go:615] Enabling API group "batch".
    I0223 20:04:27.249552      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:27.249607      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:27.265473      17 cacher.go:405] cacher (*batch.CronJob): initialized
    I0223 20:04:27.267371      17 store.go:1376] Monitoring certificatesigningrequests.certificates.k8s.io count at <storage-prefix>//certificatesigningrequests
    I0223 20:04:27.268397      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:27.268506      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:27.304412      17 store.go:1376] Monitoring certificatesigningrequests.certificates.k8s.io count at <storage-prefix>//certificatesigningrequests
    I0223 20:04:27.304488      17 instance.go:615] Enabling API group "certificates.k8s.io".
    I0223 20:04:27.305099      17 cacher.go:405] cacher (*certificates.CertificateSigningRequest): initialized
    I0223 20:04:27.306236      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:27.306306      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:27.345404      17 cacher.go:405] cacher (*certificates.CertificateSigningRequest): initialized
    I0223 20:04:27.350570      17 store.go:1376] Monitoring leases.coordination.k8s.io count at <storage-prefix>//leases
    I0223 20:04:27.354596      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:27.354724      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:27.370278      17 trace.go:205] Trace[608177586]: "List etcd3" key:/secrets,resourceVersion:,resourceVersionMatch:,limit:10000,continue: (23-Feb-2021 20:04:26.370) (total time: 999ms):
    Trace[608177586]: [999.854798ms] [999.854798ms] END
    I0223 20:04:27.377848      17 cacher.go:405] cacher (*core.Secret): initialized
    I0223 20:04:27.386497      17 cacher.go:405] cacher (*coordination.Lease): initialized
    I0223 20:04:27.387675      17 store.go:1376] Monitoring leases.coordination.k8s.io count at <storage-prefix>//leases
    I0223 20:04:27.387815      17 instance.go:615] Enabling API group "coordination.k8s.io".
    I0223 20:04:27.389044      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:27.389178      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:27.418801      17 store.go:1376] Monitoring endpointslices.discovery.k8s.io count at <storage-prefix>//endpointslices
    I0223 20:04:27.418980      17 instance.go:615] Enabling API group "discovery.k8s.io".
    I0223 20:04:27.420087      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:27.420229      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:27.422163      17 cacher.go:405] cacher (*coordination.Lease): initialized
    I0223 20:04:27.436279      17 store.go:1376] Monitoring ingresses.networking.k8s.io count at <storage-prefix>//ingress
    I0223 20:04:27.436397      17 instance.go:615] Enabling API group "extensions".
    I0223 20:04:27.437381      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:27.437496      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:27.444875      17 cacher.go:405] cacher (*networking.Ingress): initialized
    I0223 20:04:27.460487      17 store.go:1376] Monitoring networkpolicies.networking.k8s.io count at <storage-prefix>//networkpolicies
    I0223 20:04:27.461619      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:27.461712      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:27.481119      17 store.go:1376] Monitoring ingresses.networking.k8s.io count at <storage-prefix>//ingress
    I0223 20:04:27.482029      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:27.482143      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:27.482931      17 cacher.go:405] cacher (*networking.NetworkPolicy): initialized
    I0223 20:04:27.496119      17 cacher.go:405] cacher (*discovery.EndpointSlice): initialized
    I0223 20:04:27.498380      17 store.go:1376] Monitoring ingressclasses.networking.k8s.io count at <storage-prefix>//ingressclasses
    I0223 20:04:27.499330      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:27.499373      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:27.504951      17 cacher.go:405] cacher (*networking.Ingress): initialized
    I0223 20:04:27.519356      17 cacher.go:405] cacher (*networking.IngressClass): initialized
    I0223 20:04:27.520033      17 store.go:1376] Monitoring ingresses.networking.k8s.io count at <storage-prefix>//ingress
    I0223 20:04:27.522582      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:27.522675      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:27.533536      17 cacher.go:405] cacher (*networking.Ingress): initialized
    I0223 20:04:27.545445      17 store.go:1376] Monitoring ingressclasses.networking.k8s.io count at <storage-prefix>//ingressclasses
    I0223 20:04:27.545501      17 instance.go:615] Enabling API group "networking.k8s.io".
    I0223 20:04:27.546383      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:27.546439      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:27.561505      17 store.go:1376] Monitoring runtimeclasses.node.k8s.io count at <storage-prefix>//runtimeclasses
    I0223 20:04:27.562400      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:27.562448      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:27.564517      17 cacher.go:405] cacher (*networking.IngressClass): initialized
    I0223 20:04:27.576319      17 cacher.go:405] cacher (*node.RuntimeClass): initialized
    I0223 20:04:27.576377      17 store.go:1376] Monitoring runtimeclasses.node.k8s.io count at <storage-prefix>//runtimeclasses
    I0223 20:04:27.576410      17 instance.go:615] Enabling API group "node.k8s.io".
    I0223 20:04:27.577345      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:27.577397      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:27.586249      17 cacher.go:405] cacher (*node.RuntimeClass): initialized
    I0223 20:04:27.593246      17 store.go:1376] Monitoring poddisruptionbudgets.policy count at <storage-prefix>//poddisruptionbudgets
    I0223 20:04:27.597608      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:27.597661      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:27.600643      17 cacher.go:405] cacher (*policy.PodDisruptionBudget): initialized
    I0223 20:04:27.612680      17 store.go:1376] Monitoring podsecuritypolicies.policy count at <storage-prefix>//podsecuritypolicy
    I0223 20:04:27.612723      17 instance.go:615] Enabling API group "policy".
    I0223 20:04:27.613476      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:27.613513      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:27.629813      17 cacher.go:405] cacher (*policy.PodSecurityPolicy): initialized
    I0223 20:04:27.630078      17 store.go:1376] Monitoring roles.rbac.authorization.k8s.io count at <storage-prefix>//roles
    I0223 20:04:27.631277      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:27.631379      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:27.647356      17 store.go:1376] Monitoring rolebindings.rbac.authorization.k8s.io count at <storage-prefix>//rolebindings
    I0223 20:04:27.648036      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:27.648072      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:27.667279      17 store.go:1376] Monitoring clusterroles.rbac.authorization.k8s.io count at <storage-prefix>//clusterroles
    I0223 20:04:27.668271      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:27.668362      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:27.676325      17 cacher.go:405] cacher (*rbac.Role): initialized
    I0223 20:04:27.693063      17 store.go:1376] Monitoring clusterrolebindings.rbac.authorization.k8s.io count at <storage-prefix>//clusterrolebindings
    I0223 20:04:27.696636      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:27.696741      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:27.703721      17 cacher.go:405] cacher (*rbac.RoleBinding): initialized
    I0223 20:04:27.721401      17 store.go:1376] Monitoring roles.rbac.authorization.k8s.io count at <storage-prefix>//roles
    I0223 20:04:27.729326      17 cacher.go:405] cacher (*rbac.ClusterRoleBinding): initialized
    I0223 20:04:27.732582      17 cacher.go:405] cacher (*rbac.Role): initialized
    I0223 20:04:27.734458      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:27.734564      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:27.736637      17 cacher.go:405] cacher (*rbac.ClusterRole): initialized
    I0223 20:04:27.751320      17 store.go:1376] Monitoring rolebindings.rbac.authorization.k8s.io count at <storage-prefix>//rolebindings
    I0223 20:04:27.752087      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:27.752183      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:27.768330      17 store.go:1376] Monitoring clusterroles.rbac.authorization.k8s.io count at <storage-prefix>//clusterroles
    I0223 20:04:27.769315      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:27.769384      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:27.790526      17 store.go:1376] Monitoring clusterrolebindings.rbac.authorization.k8s.io count at <storage-prefix>//clusterrolebindings
    I0223 20:04:27.790599      17 instance.go:615] Enabling API group "rbac.authorization.k8s.io".
    I0223 20:04:27.794334      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:27.794393      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:27.799178      17 cacher.go:405] cacher (*rbac.RoleBinding): initialized
    I0223 20:04:27.815447      17 store.go:1376] Monitoring priorityclasses.scheduling.k8s.io count at <storage-prefix>//priorityclasses
    I0223 20:04:27.819474      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:27.819579      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:27.820395      17 cacher.go:405] cacher (*rbac.ClusterRole): initialized
    I0223 20:04:27.822252      17 cacher.go:405] cacher (*scheduling.PriorityClass): initialized
    I0223 20:04:27.823428      17 cacher.go:405] cacher (*rbac.ClusterRoleBinding): initialized
    I0223 20:04:27.836311      17 store.go:1376] Monitoring priorityclasses.scheduling.k8s.io count at <storage-prefix>//priorityclasses
    I0223 20:04:27.836660      17 instance.go:615] Enabling API group "scheduling.k8s.io".
    I0223 20:04:27.837631      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:27.837680      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:27.853027      17 cacher.go:405] cacher (*scheduling.PriorityClass): initialized
    I0223 20:04:27.858292      17 store.go:1376] Monitoring storageclasses.storage.k8s.io count at <storage-prefix>//storageclasses
    I0223 20:04:27.858961      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:27.858995      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:27.879689      17 cacher.go:405] cacher (*storage.StorageClass): initialized
    I0223 20:04:27.881679      17 store.go:1376] Monitoring volumeattachments.storage.k8s.io count at <storage-prefix>//volumeattachments
    I0223 20:04:27.882573      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:27.882609      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:27.889034      17 cacher.go:405] cacher (*storage.VolumeAttachment): initialized
    I0223 20:04:27.899516      17 store.go:1376] Monitoring csinodes.storage.k8s.io count at <storage-prefix>//csinodes
    I0223 20:04:27.900295      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:27.900345      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:27.903950      17 cacher.go:405] cacher (*storage.CSINode): initialized
    I0223 20:04:27.924271      17 store.go:1376] Monitoring csidrivers.storage.k8s.io count at <storage-prefix>//csidrivers
    I0223 20:04:27.925327      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:27.925464      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:27.947786      17 store.go:1376] Monitoring storageclasses.storage.k8s.io count at <storage-prefix>//storageclasses
    I0223 20:04:27.948816      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:27.948941      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:27.964170      17 cacher.go:782] cacher (*coordination.Lease): 1 objects queued in incoming channel.
    I0223 20:04:27.964259      17 cacher.go:782] cacher (*coordination.Lease): 2 objects queued in incoming channel.
    I0223 20:04:27.975268      17 cacher.go:405] cacher (*storage.CSIDriver): initialized
    I0223 20:04:27.975572      17 cacher.go:782] cacher (*coordination.Lease): 1 objects queued in incoming channel.
    I0223 20:04:27.975589      17 cacher.go:782] cacher (*coordination.Lease): 2 objects queued in incoming channel.
    I0223 20:04:27.975893      17 cacher.go:405] cacher (*storage.StorageClass): initialized
    I0223 20:04:27.977379      17 store.go:1376] Monitoring volumeattachments.storage.k8s.io count at <storage-prefix>//volumeattachments
    I0223 20:04:27.978252      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:27.978293      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:27.981997      17 cacher.go:405] cacher (*storage.VolumeAttachment): initialized
    I0223 20:04:28.001442      17 store.go:1376] Monitoring csinodes.storage.k8s.io count at <storage-prefix>//csinodes
    I0223 20:04:28.002535      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:28.002648      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:28.015523      17 cacher.go:405] cacher (*storage.CSINode): initialized
    I0223 20:04:28.020684      17 store.go:1376] Monitoring csidrivers.storage.k8s.io count at <storage-prefix>//csidrivers
    I0223 20:04:28.020834      17 instance.go:615] Enabling API group "storage.k8s.io".
    I0223 20:04:28.021735      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:28.021876      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:28.049974      17 cacher.go:405] cacher (*storage.CSIDriver): initialized
    I0223 20:04:28.053001      17 store.go:1376] Monitoring flowschemas.flowcontrol.apiserver.k8s.io count at <storage-prefix>//flowschemas
    I0223 20:04:28.054178      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:28.054225      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:28.076963      17 store.go:1376] Monitoring prioritylevelconfigurations.flowcontrol.apiserver.k8s.io count at <storage-prefix>//prioritylevelconfigurations
    I0223 20:04:28.077089      17 instance.go:615] Enabling API group "flowcontrol.apiserver.k8s.io".
    I0223 20:04:28.078094      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:28.078991      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:28.082877      17 cacher.go:405] cacher (*flowcontrol.FlowSchema): initialized
    I0223 20:04:28.097235      17 store.go:1376] Monitoring deployments.apps count at <storage-prefix>//deployments
    I0223 20:04:28.098047      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:28.098155      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:28.102080      17 cacher.go:405] cacher (*flowcontrol.PriorityLevelConfiguration): initialized
    I0223 20:04:28.130860      17 store.go:1376] Monitoring statefulsets.apps count at <storage-prefix>//statefulsets
    I0223 20:04:28.131680      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:28.131757      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:28.135161      17 cacher.go:782] cacher (*coordination.Lease): 3 objects queued in incoming channel.
    I0223 20:04:28.135240      17 cacher.go:782] cacher (*coordination.Lease): 4 objects queued in incoming channel.
    I0223 20:04:28.151674      17 cacher.go:405] cacher (*apps.StatefulSet): initialized
    I0223 20:04:28.152267      17 store.go:1376] Monitoring daemonsets.apps count at <storage-prefix>//daemonsets
    I0223 20:04:28.153354      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:28.153441      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:28.172655      17 store.go:1376] Monitoring replicasets.apps count at <storage-prefix>//replicasets
    I0223 20:04:28.173507      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:28.173597      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:28.193291      17 store.go:1376] Monitoring controllerrevisions.apps count at <storage-prefix>//controllerrevisions
    I0223 20:04:28.193446      17 instance.go:615] Enabling API group "apps".
    I0223 20:04:28.194383      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:28.194429      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:28.199432      17 cacher.go:405] cacher (*apps.DaemonSet): initialized
    I0223 20:04:28.222585      17 store.go:1376] Monitoring validatingwebhookconfigurations.admissionregistration.k8s.io count at <storage-prefix>//validatingwebhookconfigurations
    I0223 20:04:28.223395      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:28.228592      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:28.228498      17 cacher.go:405] cacher (*apps.ControllerRevision): initialized
    I0223 20:04:28.237298      17 cacher.go:405] cacher (*admissionregistration.ValidatingWebhookConfiguration): initialized
    I0223 20:04:28.251258      17 cacher.go:405] cacher (*apps.Deployment): initialized
    I0223 20:04:28.251848      17 store.go:1376] Monitoring mutatingwebhookconfigurations.admissionregistration.k8s.io count at <storage-prefix>//mutatingwebhookconfigurations
    I0223 20:04:28.253223      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:28.254464      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:28.258870      17 cacher.go:405] cacher (*admissionregistration.MutatingWebhookConfiguration): initialized
    I0223 20:04:28.279278      17 cacher.go:782] cacher (*apps.Deployment): 1 objects queued in incoming channel.
    I0223 20:04:28.279389      17 cacher.go:782] cacher (*apps.Deployment): 2 objects queued in incoming channel.
    I0223 20:04:28.279450      17 cacher.go:782] cacher (*apps.Deployment): 3 objects queued in incoming channel.
    I0223 20:04:28.279491      17 cacher.go:782] cacher (*apps.Deployment): 4 objects queued in incoming channel.
    I0223 20:04:28.279583      17 cacher.go:782] cacher (*apps.Deployment): 5 objects queued in incoming channel.
    I0223 20:04:28.279646      17 cacher.go:782] cacher (*apps.Deployment): 6 objects queued in incoming channel.
    I0223 20:04:28.279716      17 cacher.go:782] cacher (*apps.Deployment): 7 objects queued in incoming channel.
    I0223 20:04:28.279755      17 cacher.go:782] cacher (*apps.Deployment): 8 objects queued in incoming channel.
    I0223 20:04:28.279840      17 cacher.go:782] cacher (*apps.Deployment): 9 objects queued in incoming channel.
    I0223 20:04:28.279918      17 cacher.go:782] cacher (*apps.Deployment): 10 objects queued in incoming channel.
    I0223 20:04:28.280028      17 cacher.go:782] cacher (*apps.Deployment): 11 objects queued in incoming channel.
    I0223 20:04:28.280140      17 cacher.go:782] cacher (*apps.Deployment): 12 objects queued in incoming channel.
    I0223 20:04:28.280205      17 cacher.go:782] cacher (*apps.Deployment): 13 objects queued in incoming channel.
    I0223 20:04:28.280247      17 cacher.go:782] cacher (*apps.Deployment): 14 objects queued in incoming channel.
    I0223 20:04:28.305269      17 store.go:1376] Monitoring validatingwebhookconfigurations.admissionregistration.k8s.io count at <storage-prefix>//validatingwebhookconfigurations
    I0223 20:04:28.307196      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:28.307317      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:28.325356      17 cacher.go:405] cacher (*apps.ReplicaSet): initialized
    I0223 20:04:28.337862      17 store.go:1376] Monitoring mutatingwebhookconfigurations.admissionregistration.k8s.io count at <storage-prefix>//mutatingwebhookconfigurations
    I0223 20:04:28.338002      17 instance.go:615] Enabling API group "admissionregistration.k8s.io".
    I0223 20:04:28.339180      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:28.339299      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:28.342589      17 cacher.go:405] cacher (*admissionregistration.ValidatingWebhookConfiguration): initialized
    I0223 20:04:28.346087      17 cacher.go:405] cacher (*admissionregistration.MutatingWebhookConfiguration): initialized
    I0223 20:04:28.355894      17 store.go:1376] Monitoring events count at <storage-prefix>//events
    I0223 20:04:28.356829      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:28.356894      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:28.391532      17 store.go:1376] Monitoring events count at <storage-prefix>//events
    I0223 20:04:28.391590      17 instance.go:615] Enabling API group "events.k8s.io".
    I0223 20:04:28.416495      17 cacher.go:782] cacher (*apps.ReplicaSet): 1 objects queued in incoming channel.
    I0223 20:04:28.416607      17 cacher.go:782] cacher (*apps.ReplicaSet): 2 objects queued in incoming channel.
    I0223 20:04:28.416655      17 cacher.go:782] cacher (*apps.ReplicaSet): 3 objects queued in incoming channel.
    I0223 20:04:28.416700      17 cacher.go:782] cacher (*apps.ReplicaSet): 4 objects queued in incoming channel.
    I0223 20:04:28.416780      17 cacher.go:782] cacher (*apps.ReplicaSet): 5 objects queued in incoming channel.
    I0223 20:04:28.416835      17 cacher.go:782] cacher (*apps.ReplicaSet): 6 objects queued in incoming channel.
    I0223 20:04:28.416885      17 cacher.go:782] cacher (*apps.ReplicaSet): 7 objects queued in incoming channel.
    I0223 20:04:28.416951      17 cacher.go:782] cacher (*apps.ReplicaSet): 8 objects queued in incoming channel.
    I0223 20:04:28.417026      17 cacher.go:782] cacher (*apps.ReplicaSet): 9 objects queued in incoming channel.
    I0223 20:04:28.417072      17 cacher.go:782] cacher (*apps.ReplicaSet): 10 objects queued in incoming channel.
    W0223 20:04:28.627811      17 genericapiserver.go:455] Skipping API batch/v2alpha1 because it has no resources.
    W0223 20:04:28.643668      17 genericapiserver.go:455] Skipping API discovery.k8s.io/v1alpha1 because it has no resources.
    W0223 20:04:28.659797      17 genericapiserver.go:455] Skipping API node.k8s.io/v1alpha1 because it has no resources.
    W0223 20:04:28.672522      17 genericapiserver.go:455] Skipping API rbac.authorization.k8s.io/v1alpha1 because it has no resources.
    W0223 20:04:28.677146      17 genericapiserver.go:455] Skipping API scheduling.k8s.io/v1alpha1 because it has no resources.
    W0223 20:04:28.685297      17 genericapiserver.go:455] Skipping API storage.k8s.io/v1alpha1 because it has no resources.
    W0223 20:04:28.700640      17 genericapiserver.go:455] Skipping API apps/v1beta2 because it has no resources.
    W0223 20:04:28.700669      17 genericapiserver.go:455] Skipping API apps/v1beta1 because it has no resources.
    W0223 20:04:28.713204      17 admission.go:78] PersistentVolumeLabel admission controller is deprecated. Please remove this controller from your configuration files and scripts.
    I0223 20:04:28.713295      17 admission.go:47] Admission plugin "autoscaling.openshift.io/ClusterResourceOverride" is not configured so it will be disabled.
    I0223 20:04:28.713365      17 admission.go:33] Admission plugin "autoscaling.openshift.io/RunOnceDuration" is not configured so it will be disabled.
    I0223 20:04:28.713386      17 admission.go:32] Admission plugin "scheduling.openshift.io/PodNodeConstraints" is not configured so it will be disabled.
    I0223 20:04:28.714582      17 plugins.go:158] Loaded 19 mutating admission controller(s) successfully in the following order: NamespaceLifecycle,LimitRanger,ServiceAccount,NodeRestriction,TaintNodesByCondition,PodNodeSelector,Priority,DefaultTolerationSeconds,PodTolerationRestriction,PersistentVolumeLabel,DefaultStorageClass,StorageObjectInUseProtection,RuntimeClass,DefaultIngressClass,scheduling.openshift.io/OriginPodNodeEnvironment,image.openshift.io/ImagePolicy,security.openshift.io/SecurityContextConstraint,security.openshift.io/DefaultSecurityContextConstraints,MutatingAdmissionWebhook.
    I0223 20:04:28.714616      17 plugins.go:161] Loaded 35 validating admission controller(s) successfully in the following order: LimitRanger,ServiceAccount,PodNodeSelector,Priority,PodTolerationRestriction,OwnerReferencesPermissionEnforcement,PersistentVolumeClaimResize,RuntimeClass,CertificateApproval,CertificateSigning,CertificateSubjectRestriction,authorization.openshift.io/RestrictSubjectBindings,scheduling.openshift.io/OriginPodNodeEnvironment,network.openshift.io/ExternalIPRanger,network.openshift.io/RestrictedEndpointsAdmission,image.openshift.io/ImagePolicy,security.openshift.io/SecurityContextConstraint,security.openshift.io/SCCExecRestrictions,route.openshift.io/IngressAdmission,config.openshift.io/ValidateAPIServer,config.openshift.io/ValidateAuthentication,config.openshift.io/ValidateFeatureGate,config.openshift.io/ValidateConsole,config.openshift.io/ValidateImage,config.openshift.io/ValidateOAuth,config.openshift.io/ValidateProject,config.openshift.io/DenyDeleteClusterConfiguration,config.openshift.io/ValidateScheduler,quota.openshift.io/ValidateClusterResourceQuota,security.openshift.io/ValidateSecurityContextConstraints,authorization.openshift.io/ValidateRoleBindingRestriction,config.openshift.io/ValidateNetwork,ValidatingAdmissionWebhook,ResourceQuota,quota.openshift.io/ClusterResourceQuota.
    I0223 20:04:28.717126      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:28.717179      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:28.737440      17 store.go:1376] Monitoring apiservices.apiregistration.k8s.io count at <storage-prefix>//apiregistration.k8s.io/apiservices
    I0223 20:04:28.738194      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:28.738281      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:28.751843      17 store.go:1376] Monitoring apiservices.apiregistration.k8s.io count at <storage-prefix>//apiregistration.k8s.io/apiservices
    I0223 20:04:28.754619      17 dynamic_serving_content.go:111] Loaded a new cert/key pair for "aggregator-proxy-cert::/etc/kubernetes/static-pod-certs/secrets/aggregator-client/tls.crt::/etc/kubernetes/static-pod-certs/secrets/aggregator-client/tls.key"
    I0223 20:04:28.760398      17 cacher.go:405] cacher (*apiregistration.APIService): initialized
    I0223 20:04:28.768291      17 cacher.go:405] cacher (*apiregistration.APIService): initialized
    I0223 20:04:31.034194      17 aggregator.go:109] Building initial OpenAPI spec
    I0223 20:04:31.980404      17 aggregator.go:112] Finished initial OpenAPI spec generation after 946.177635ms
    I0223 20:04:31.980969      17 dynamic_cafile_content.go:167] Starting request-header::/etc/kubernetes/static-pod-certs/configmaps/aggregator-client-ca/ca-bundle.crt
    I0223 20:04:31.980976      17 dynamic_cafile_content.go:167] Starting client-ca-bundle::/etc/kubernetes/static-pod-certs/configmaps/client-ca/ca-bundle.crt
    I0223 20:04:31.981300      17 dynamic_serving_content.go:130] Starting serving-cert::/etc/kubernetes/static-pod-certs/secrets/service-network-serving-certkey/tls.crt::/etc/kubernetes/static-pod-certs/secrets/service-network-serving-certkey/tls.key
    I0223 20:04:31.981318      17 dynamic_serving_content.go:130] Starting sni-serving-cert::/etc/kubernetes/static-pod-certs/secrets/localhost-serving-cert-certkey/tls.crt::/etc/kubernetes/static-pod-certs/secrets/localhost-serving-cert-certkey/tls.key
    I0223 20:04:31.981950      17 dynamic_serving_content.go:130] Starting sni-serving-cert::/etc/kubernetes/static-pod-certs/secrets/service-network-serving-certkey/tls.crt::/etc/kubernetes/static-pod-certs/secrets/service-network-serving-certkey/tls.key
    I0223 20:04:31.982182      17 dynamic_serving_content.go:130] Starting sni-serving-cert::/etc/kubernetes/static-pod-certs/secrets/external-loadbalancer-serving-certkey/tls.crt::/etc/kubernetes/static-pod-certs/secrets/external-loadbalancer-serving-certkey/tls.key
    I0223 20:04:31.982408      17 dynamic_serving_content.go:130] Starting sni-serving-cert::/etc/kubernetes/static-pod-certs/secrets/internal-loadbalancer-serving-certkey/tls.crt::/etc/kubernetes/static-pod-certs/secrets/internal-loadbalancer-serving-certkey/tls.key
    I0223 20:04:31.982845      17 dynamic_serving_content.go:130] Starting sni-serving-cert::/etc/kubernetes/static-pod-resources/secrets/localhost-recovery-serving-certkey/tls.crt::/etc/kubernetes/static-pod-resources/secrets/localhost-recovery-serving-certkey/tls.key
    I0223 20:04:31.983193      17 tlsconfig.go:178] loaded client CA [0/"client-ca-bundle::/etc/kubernetes/static-pod-certs/configmaps/client-ca/ca-bundle.crt,request-header::/etc/kubernetes/static-pod-certs/configmaps/aggregator-client-ca/ca-bundle.crt"]: "admin-kubeconfig-signer" [] issuer="<self>" (2021-02-23 13:30:35 +0000 UTC to 2031-02-21 13:30:35 +0000 UTC (now=2021-02-23 20:04:31.983161443 +0000 UTC))
    I0223 20:04:31.983253      17 tlsconfig.go:178] loaded client CA [1/"client-ca-bundle::/etc/kubernetes/static-pod-certs/configmaps/client-ca/ca-bundle.crt,request-header::/etc/kubernetes/static-pod-certs/configmaps/aggregator-client-ca/ca-bundle.crt"]: "kube-csr-signer_@1614087857" [] issuer="kubelet-signer" (2021-02-23 13:44:17 +0000 UTC to 2021-02-24 13:30:43 +0000 UTC (now=2021-02-23 20:04:31.983235589 +0000 UTC))
    I0223 20:04:31.983283      17 tlsconfig.go:178] loaded client CA [2/"client-ca-bundle::/etc/kubernetes/static-pod-certs/configmaps/client-ca/ca-bundle.crt,request-header::/etc/kubernetes/static-pod-certs/configmaps/aggregator-client-ca/ca-bundle.crt"]: "kubelet-signer" [] issuer="<self>" (2021-02-23 13:30:43 +0000 UTC to 2021-02-24 13:30:43 +0000 UTC (now=2021-02-23 20:04:31.983268863 +0000 UTC))
    I0223 20:04:31.983311      17 tlsconfig.go:178] loaded client CA [3/"client-ca-bundle::/etc/kubernetes/static-pod-certs/configmaps/client-ca/ca-bundle.crt,request-header::/etc/kubernetes/static-pod-certs/configmaps/aggregator-client-ca/ca-bundle.crt"]: "kube-apiserver-to-kubelet-signer" [] issuer="<self>" (2021-02-23 13:30:43 +0000 UTC to 2022-02-23 13:30:43 +0000 UTC (now=2021-02-23 20:04:31.983297719 +0000 UTC))
    I0223 20:04:31.983354      17 tlsconfig.go:178] loaded client CA [4/"client-ca-bundle::/etc/kubernetes/static-pod-certs/configmaps/client-ca/ca-bundle.crt,request-header::/etc/kubernetes/static-pod-certs/configmaps/aggregator-client-ca/ca-bundle.crt"]: "kube-control-plane-signer" [] issuer="<self>" (2021-02-23 13:30:43 +0000 UTC to 2022-02-23 13:30:43 +0000 UTC (now=2021-02-23 20:04:31.983324464 +0000 UTC))
    I0223 20:04:31.983386      17 tlsconfig.go:178] loaded client CA [5/"client-ca-bundle::/etc/kubernetes/static-pod-certs/configmaps/client-ca/ca-bundle.crt,request-header::/etc/kubernetes/static-pod-certs/configmaps/aggregator-client-ca/ca-bundle.crt"]: "kubelet-bootstrap-kubeconfig-signer" [] issuer="<self>" (2021-02-23 13:30:37 +0000 UTC to 2031-02-21 13:30:37 +0000 UTC (now=2021-02-23 20:04:31.983376508 +0000 UTC))
    I0223 20:04:31.983404      17 tlsconfig.go:178] loaded client CA [6/"client-ca-bundle::/etc/kubernetes/static-pod-certs/configmaps/client-ca/ca-bundle.crt,request-header::/etc/kubernetes/static-pod-certs/configmaps/aggregator-client-ca/ca-bundle.crt"]: "openshift-kube-apiserver-operator_node-system-admin-signer@1614087859" [] issuer="<self>" (2021-02-23 13:44:19 +0000 UTC to 2022-02-23 13:44:20 +0000 UTC (now=2021-02-23 20:04:31.98339595 +0000 UTC))
    I0223 20:04:31.983436      17 tlsconfig.go:178] loaded client CA [7/"client-ca-bundle::/etc/kubernetes/static-pod-certs/configmaps/client-ca/ca-bundle.crt,request-header::/etc/kubernetes/static-pod-certs/configmaps/aggregator-client-ca/ca-bundle.crt"]: "openshift-kube-apiserver-operator_aggregator-client-signer@1614108647" [] issuer="<self>" (2021-02-23 19:30:46 +0000 UTC to 2021-02-24 07:30:47 +0000 UTC (now=2021-02-23 20:04:31.983418409 +0000 UTC))
    I0223 20:04:31.983470      17 tlsconfig.go:178] loaded client CA [8/"client-ca-bundle::/etc/kubernetes/static-pod-certs/configmaps/client-ca/ca-bundle.crt,request-header::/etc/kubernetes/static-pod-certs/configmaps/aggregator-client-ca/ca-bundle.crt"]: "aggregator-signer" [] issuer="<self>" (2021-02-23 13:30:40 +0000 UTC to 2021-02-24 13:30:40 +0000 UTC (now=2021-02-23 20:04:31.983460261 +0000 UTC))
    I0223 20:04:31.983891      17 tlsconfig.go:200] loaded serving cert ["serving-cert::/etc/kubernetes/static-pod-certs/secrets/service-network-serving-certkey/tls.crt::/etc/kubernetes/static-pod-certs/secrets/service-network-serving-certkey/tls.key"]: "172.30.0.1" [serving] validServingFor=[172.30.0.1,kubernetes,kubernetes.default,kubernetes.default.svc,kubernetes.default.svc.cluster.local,openshift,openshift.default,openshift.default.svc,openshift.default.svc.cluster.local,172.30.0.1] issuer="kube-apiserver-service-network-signer" (2021-02-23 19:44:43 +0000 UTC to 2021-02-24 07:44:44 +0000 UTC (now=2021-02-23 20:04:31.983868154 +0000 UTC))
    I0223 20:04:31.984291      17 named_certificates.go:53] loaded SNI cert [5/"sni-serving-cert::/etc/kubernetes/static-pod-resources/secrets/localhost-recovery-serving-certkey/tls.crt::/etc/kubernetes/static-pod-resources/secrets/localhost-recovery-serving-certkey/tls.key"]: "localhost-recovery" [serving] validServingFor=[localhost-recovery] issuer="openshift-kube-apiserver-operator_localhost-recovery-serving-signer@1614087859" (2021-02-23 13:44:38 +0000 UTC to 2031-02-21 13:44:19 +0000 UTC (now=2021-02-23 20:04:31.984268859 +0000 UTC))
    I0223 20:04:31.984713      17 named_certificates.go:53] loaded SNI cert [4/"sni-serving-cert::/etc/kubernetes/static-pod-certs/secrets/internal-loadbalancer-serving-certkey/tls.crt::/etc/kubernetes/static-pod-certs/secrets/internal-loadbalancer-serving-certkey/tls.key"]: "api-int.rhamilto.devcluster.openshift.com" [serving] validServingFor=[api-int.rhamilto.devcluster.openshift.com] issuer="kube-apiserver-lb-signer" (2021-02-23 19:44:32 +0000 UTC to 2021-02-24 07:44:33 +0000 UTC (now=2021-02-23 20:04:31.984697529 +0000 UTC))
    I0223 20:04:31.985065      17 named_certificates.go:53] loaded SNI cert [3/"sni-serving-cert::/etc/kubernetes/static-pod-certs/secrets/external-loadbalancer-serving-certkey/tls.crt::/etc/kubernetes/static-pod-certs/secrets/external-loadbalancer-serving-certkey/tls.key"]: "api.rhamilto.devcluster.openshift.com" [serving] validServingFor=[api.rhamilto.devcluster.openshift.com] issuer="kube-apiserver-lb-signer" (2021-02-23 19:44:32 +0000 UTC to 2021-02-24 07:44:33 +0000 UTC (now=2021-02-23 20:04:31.985044926 +0000 UTC))
    I0223 20:04:31.985571      17 named_certificates.go:53] loaded SNI cert [2/"sni-serving-cert::/etc/kubernetes/static-pod-certs/secrets/service-network-serving-certkey/tls.crt::/etc/kubernetes/static-pod-certs/secrets/service-network-serving-certkey/tls.key"]: "172.30.0.1" [serving] validServingFor=[172.30.0.1,kubernetes,kubernetes.default,kubernetes.default.svc,kubernetes.default.svc.cluster.local,openshift,openshift.default,openshift.default.svc,openshift.default.svc.cluster.local,172.30.0.1] issuer="kube-apiserver-service-network-signer" (2021-02-23 19:44:43 +0000 UTC to 2021-02-24 07:44:44 +0000 UTC (now=2021-02-23 20:04:31.985556438 +0000 UTC))
    I0223 20:04:31.985982      17 named_certificates.go:53] loaded SNI cert [1/"sni-serving-cert::/etc/kubernetes/static-pod-certs/secrets/localhost-serving-cert-certkey/tls.crt::/etc/kubernetes/static-pod-certs/secrets/localhost-serving-cert-certkey/tls.key"]: "127.0.0.1" [serving] validServingFor=[127.0.0.1,localhost,127.0.0.1] issuer="kube-apiserver-localhost-signer" (2021-02-23 19:44:32 +0000 UTC to 2021-02-24 07:44:33 +0000 UTC (now=2021-02-23 20:04:31.985961899 +0000 UTC))
    I0223 20:04:31.986409      17 named_certificates.go:53] loaded SNI cert [0/"self-signed loopback"]: "apiserver-loopback-client@1614110665" [serving] validServingFor=[apiserver-loopback-client] issuer="apiserver-loopback-client-ca@1614110665" (2021-02-23 19:04:25 +0000 UTC to 2022-02-23 19:04:25 +0000 UTC (now=2021-02-23 20:04:31.986387278 +0000 UTC))
    I0223 20:04:31.986477      17 secure_serving.go:197] Serving securely on [::]:6443
    I0223 20:04:31.986573      17 tlsconfig.go:240] Starting DynamicServingCertificateController
    I0223 20:04:31.986723      17 available_controller.go:475] Starting AvailableConditionController
    I0223 20:04:31.986773      17 cache.go:32] Waiting for caches to sync for AvailableConditionController controller
    I0223 20:04:31.988525      17 reflector.go:219] Starting reflector *v1.Group (10m0s) from github.com/openshift/client-go/user/informers/externalversions/factory.go:101
    I0223 20:04:31.988902      17 reflector.go:219] Starting reflector *v1.OAuthClient (10m0s) from github.com/openshift/client-go/oauth/informers/externalversions/factory.go:101
    I0223 20:04:31.992713      17 reflector.go:219] Starting reflector *v1.ValidatingWebhookConfiguration (10m0s) from k8s.io/client-go/informers/factory.go:134
    I0223 20:04:31.993579      17 reflector.go:219] Starting reflector *v1.Group (10m0s) from github.com/openshift/client-go/user/informers/externalversions/factory.go:101
    I0223 20:04:31.993825      17 dynamic_serving_content.go:130] Starting aggregator-proxy-cert::/etc/kubernetes/static-pod-certs/secrets/aggregator-client/tls.crt::/etc/kubernetes/static-pod-certs/secrets/aggregator-client/tls.key
    I0223 20:04:31.994080      17 reflector.go:219] Starting reflector *v1.APIService (30s) from k8s.io/kube-aggregator/pkg/client/informers/externalversions/factory.go:117
    I0223 20:04:31.994327      17 apiservice_controller.go:97] Starting APIServiceRegistrationController
    I0223 20:04:31.994345      17 cache.go:32] Waiting for caches to sync for APIServiceRegistrationController controller
    I0223 20:04:31.994377      17 clusterquotamapping.go:127] Starting ClusterQuotaMappingController controller
    I0223 20:04:31.994406      17 apf_controller.go:261] Starting API Priority and Fairness config controller
    I0223 20:04:31.994600      17 reflector.go:219] Starting reflector *v1.CustomResourceDefinition (5m0s) from k8s.io/apiextensions-apiserver/pkg/client/informers/externalversions/factory.go:117
    I0223 20:04:31.999650      17 controller.go:83] Starting OpenAPI AggregationController
    I0223 20:04:32.000382      17 cluster_authentication_trust_controller.go:440] Starting cluster_authentication_trust_controller controller
    I0223 20:04:32.000464      17 shared_informer.go:240] Waiting for caches to sync for cluster_authentication_trust_controller
    I0223 20:04:32.000558      17 customresource_discovery_controller.go:209] Starting DiscoveryController
    E0223 20:04:32.003495      17 controller.go:152] Unable to remove old endpoints from kubernetes service: StorageError: key not found, Code: 1, Key: /kubernetes.io/masterleases/10.0.171.12, ResourceVersion: 0, AdditionalErrorMsg: 
    I0223 20:04:32.016352      17 patch_genericapiserver.go:120] Loopback request to "/api/v1/namespaces/openshift-kube-controller-manager/configmaps/cert-recovery-controller-lock" (user agent "cluster-kube-controller-manager-operator/v0.0.0 (linux/amd64) kubernetes/$Format") before server is ready. This client probably does not watch /readyz and might get inconsistent answers.
    I0223 20:04:32.019214      17 crdregistration_controller.go:112] Starting crd-autoregister controller
    I0223 20:04:32.019244      17 shared_informer.go:240] Waiting for caches to sync for crd-autoregister
    I0223 20:04:32.019283      17 autoregister_controller.go:141] Starting autoregister controller
    I0223 20:04:32.019293      17 cache.go:32] Waiting for caches to sync for autoregister controller
    I0223 20:04:32.019341      17 dynamic_cafile_content.go:167] Starting client-ca-bundle::/etc/kubernetes/static-pod-certs/configmaps/client-ca/ca-bundle.crt
    I0223 20:04:32.019429      17 dynamic_cafile_content.go:167] Starting request-header::/etc/kubernetes/static-pod-certs/configmaps/aggregator-client-ca/ca-bundle.crt
    I0223 20:04:32.019686      17 reflector.go:219] Starting reflector *v1.ConfigMap (12h0m0s) from k8s.io/kubernetes/pkg/controlplane/controller/clusterauthenticationtrust/cluster_authentication_trust_controller.go:444
    I0223 20:04:32.019967      17 controller.go:86] Starting OpenAPI controller
    I0223 20:04:32.020076      17 naming_controller.go:291] Starting NamingConditionController
    I0223 20:04:32.020121      17 establishing_controller.go:76] Starting EstablishingController
    I0223 20:04:32.020150      17 nonstructuralschema_controller.go:192] Starting NonStructuralSchemaConditionController
    I0223 20:04:32.020177      17 apiapproval_controller.go:186] Starting KubernetesAPIApprovalPolicyConformantConditionController
    I0223 20:04:32.020249      17 crd_finalizer.go:266] Starting CRDFinalizer
    I0223 20:04:32.022420      17 patch_genericapiserver.go:120] Loopback request to "/api/v1/namespaces/openshift-kube-apiserver/configmaps" (user agent "cluster-kube-apiserver-operator/v0.0.0 (linux/amd64) kubernetes/$Format") before server is ready. This client probably does not watch /readyz and might get inconsistent answers.
    I0223 20:04:32.023648      17 patch_genericapiserver.go:120] Loopback request to "/api/v1/namespaces/openshift-kube-apiserver/secrets" (user agent "cluster-kube-apiserver-operator/v0.0.0 (linux/amd64) kubernetes/$Format") before server is ready. This client probably does not watch /readyz and might get inconsistent answers.
    I0223 20:04:32.038409      17 reflector.go:219] Starting reflector *v1beta1.PriorityLevelConfiguration (10m0s) from k8s.io/client-go/informers/factory.go:134
    I0223 20:04:32.038854      17 reflector.go:219] Starting reflector *v1beta1.FlowSchema (10m0s) from k8s.io/client-go/informers/factory.go:134
    I0223 20:04:32.039264      17 reflector.go:219] Starting reflector *v1.ClusterRole (10m0s) from k8s.io/client-go/informers/factory.go:134
    I0223 20:04:32.039657      17 reflector.go:219] Starting reflector *v1.Role (10m0s) from k8s.io/client-go/informers/factory.go:134
    I0223 20:04:32.040081      17 reflector.go:219] Starting reflector *v1.RoleBinding (10m0s) from k8s.io/client-go/informers/factory.go:134
    I0223 20:04:32.040491      17 reflector.go:219] Starting reflector *v1.PersistentVolume (10m0s) from k8s.io/client-go/informers/factory.go:134
    I0223 20:04:32.040899      17 reflector.go:219] Starting reflector *v1.VolumeAttachment (10m0s) from k8s.io/client-go/informers/factory.go:134
    I0223 20:04:32.041361      17 reflector.go:219] Starting reflector *v1.ServiceAccount (10m0s) from k8s.io/client-go/informers/factory.go:134
    I0223 20:04:32.041773      17 reflector.go:219] Starting reflector *v1.Pod (10m0s) from k8s.io/client-go/informers/factory.go:134
    I0223 20:04:32.042244      17 reflector.go:219] Starting reflector *v1.Node (10m0s) from k8s.io/client-go/informers/factory.go:134
    I0223 20:04:32.042633      17 reflector.go:219] Starting reflector *v1.Service (10m0s) from k8s.io/client-go/informers/factory.go:134
    I0223 20:04:32.043135      17 reflector.go:219] Starting reflector *v1.IngressClass (10m0s) from k8s.io/client-go/informers/factory.go:134
    I0223 20:04:32.043567      17 reflector.go:219] Starting reflector *v1.ResourceQuota (10m0s) from k8s.io/client-go/informers/factory.go:134
    I0223 20:04:32.043979      17 reflector.go:219] Starting reflector *v1.Endpoints (10m0s) from k8s.io/client-go/informers/factory.go:134
    I0223 20:04:32.044383      17 reflector.go:219] Starting reflector *v1.Namespace (10m0s) from k8s.io/client-go/informers/factory.go:134
    I0223 20:04:32.044776      17 reflector.go:219] Starting reflector *v1.LimitRange (10m0s) from k8s.io/client-go/informers/factory.go:134
    I0223 20:04:32.045251      17 reflector.go:219] Starting reflector *v1.MutatingWebhookConfiguration (10m0s) from k8s.io/client-go/informers/factory.go:134
    I0223 20:04:32.045707      17 reflector.go:219] Starting reflector *v1.Secret (10m0s) from k8s.io/client-go/informers/factory.go:134
    I0223 20:04:32.046131      17 reflector.go:219] Starting reflector *v1.ClusterRoleBinding (10m0s) from k8s.io/client-go/informers/factory.go:134
    I0223 20:04:32.046497      17 reflector.go:219] Starting reflector *v1.PriorityClass (10m0s) from k8s.io/client-go/informers/factory.go:134
    I0223 20:04:32.046860      17 reflector.go:219] Starting reflector *v1.StorageClass (10m0s) from k8s.io/client-go/informers/factory.go:134
    I0223 20:04:32.047274      17 reflector.go:219] Starting reflector *v1.ClusterResourceQuota (10m0s) from github.com/openshift/client-go/quota/informers/externalversions/factory.go:101
    I0223 20:04:32.047643      17 reflector.go:219] Starting reflector *v1.SecurityContextConstraints (10m0s) from github.com/openshift/client-go/security/informers/externalversions/factory.go:101
    I0223 20:04:32.057622      17 patch_genericapiserver.go:120] Loopback request to "/api/v1/namespaces/openshift-kube-apiserver/pods" (user agent "cluster-kube-apiserver-operator/v0.0.0 (linux/amd64) kubernetes/$Format") before server is ready. This client probably does not watch /readyz and might get inconsistent answers.
    I0223 20:04:32.061870      17 reflector.go:219] Starting reflector *v1.RuntimeClass (10m0s) from k8s.io/client-go/informers/factory.go:134
    I0223 20:04:32.062104      17 patch_genericapiserver.go:120] Loopback request to "/api/v1/namespaces/openshift-kube-apiserver/pods/kube-apiserver-ip-10-0-171-12.ec2.internal" (user agent "cluster-kube-apiserver-operator/v0.0.0 (linux/amd64) kubernetes/$Format") before server is ready. This client probably does not watch /readyz and might get inconsistent answers.
    I0223 20:04:32.068067      17 patch_genericapiserver.go:120] Loopback request to "/api/v1/namespaces/openshift-kube-scheduler/configmaps/cert-recovery-controller-lock" (user agent "cluster-kube-scheduler-operator/v0.0.0 (linux/amd64) kubernetes/$Format") before server is ready. This client probably does not watch /readyz and might get inconsistent answers.
    I0223 20:04:32.098166      17 cache.go:39] Caches are synced for APIServiceRegistrationController controller
    I0223 20:04:32.110217      17 aggregator.go:231] Updating OpenAPI spec because v1.quota.openshift.io is updated
    I0223 20:04:32.119599      17 cache.go:39] Caches are synced for autoregister controller
    I0223 20:04:32.121790      17 shared_informer.go:247] Caches are synced for cluster_authentication_trust_controller 
    I0223 20:04:32.149095      17 sdn_readyz_wait.go:143] reached openshift-oauth-apiserver via SDN after 161 milliseconds
    I0223 20:04:32.155793      17 sdn_readyz_wait.go:143] reached openshift-apiserver via SDN after 168 milliseconds
    I0223 20:04:32.199573      17 apf_controller.go:266] Running API Priority and Fairness config worker
    I0223 20:04:32.284353      17 patch_genericapiserver.go:120] Loopback request to "/api/v1/namespaces/openshift-kube-apiserver/configmaps/cert-regeneration-controller-lock" (user agent "cluster-kube-apiserver-operator/v0.0.0 (linux/amd64) kubernetes/$Format") before server is ready. This client probably does not watch /readyz and might get inconsistent answers.
    I0223 20:04:32.326978      17 cacher.go:782] cacher (*apiregistration.APIService): 1 objects queued in incoming channel.
    I0223 20:04:32.327008      17 cacher.go:782] cacher (*apiregistration.APIService): 2 objects queued in incoming channel.
    I0223 20:04:32.338656      17 cacher.go:782] cacher (*apiregistration.APIService): 3 objects queued in incoming channel.
    I0223 20:04:32.338678      17 cacher.go:782] cacher (*apiregistration.APIService): 4 objects queued in incoming channel.
    I0223 20:04:32.371384      17 cacher.go:782] cacher (*apiregistration.APIService): 1 objects queued in incoming channel.
    I0223 20:04:32.371413      17 cacher.go:782] cacher (*apiregistration.APIService): 2 objects queued in incoming channel.
    I0223 20:04:32.371427      17 cacher.go:782] cacher (*apiregistration.APIService): 3 objects queued in incoming channel.
    I0223 20:04:32.371435      17 cacher.go:782] cacher (*apiregistration.APIService): 4 objects queued in incoming channel.
    I0223 20:04:32.435702      17 shared_informer.go:247] Caches are synced for node_authorizer 
    I0223 20:04:32.554171      17 shared_informer.go:266] stop requested
    I0223 20:04:32.554400      17 healthz.go:266] informer-sync,poststarthook/start-apiextensions-controllers,poststarthook/crd-informer-synced,poststarthook/bootstrap-controller,poststarthook/rbac/bootstrap-roles,poststarthook/scheduling/bootstrap-system-priority-classes,poststarthook/apiservice-registration-controller check failed: readyz
    [-]informer-sync failed: 1 informers not started yet: [*v1.Secret]
    [-]poststarthook/start-apiextensions-controllers failed: not finished
    [-]poststarthook/crd-informer-synced failed: not finished
    [-]poststarthook/bootstrap-controller failed: not finished
    [-]poststarthook/rbac/bootstrap-roles failed: not finished
    [-]poststarthook/scheduling/bootstrap-system-priority-classes failed: not finished
    [-]poststarthook/apiservice-registration-controller failed: not finished
    I0223 20:04:32.568794      17 cacher.go:782] cacher (*apiregistration.APIService): 5 objects queued in incoming channel.
    I0223 20:04:32.568826      17 cacher.go:782] cacher (*apiregistration.APIService): 6 objects queued in incoming channel.
    I0223 20:04:32.582224      17 shared_informer.go:266] stop requested
    I0223 20:04:32.582354      17 healthz.go:266] informer-sync,poststarthook/start-apiextensions-controllers,poststarthook/crd-informer-synced,poststarthook/bootstrap-controller,poststarthook/rbac/bootstrap-roles,poststarthook/scheduling/bootstrap-system-priority-classes,poststarthook/apiservice-registration-controller check failed: readyz
    [-]informer-sync failed: 1 informers not started yet: [*v1.Secret]
    [-]poststarthook/start-apiextensions-controllers failed: not finished
    [-]poststarthook/crd-informer-synced failed: not finished
    [-]poststarthook/bootstrap-controller failed: not finished
    [-]poststarthook/rbac/bootstrap-roles failed: not finished
    [-]poststarthook/scheduling/bootstrap-system-priority-classes failed: not finished
    [-]poststarthook/apiservice-registration-controller failed: not finished
    I0223 20:04:32.592793      17 cache.go:39] Caches are synced for AvailableConditionController controller
    I0223 20:04:32.639103      17 trace.go:205] Trace[1727664667]: "List" url:/api/v1/secrets,user-agent:kube-apiserver/v1.20.0+69d7e87 (linux/amd64) kubernetes/69d7e87,client:::1 (23-Feb-2021 20:04:32.090) (total time: 548ms):
    Trace[1727664667]: ---"Writing http response done" count:1728 546ms (20:04:00.639)
    Trace[1727664667]: [548.430464ms] [548.430464ms] END
    I0223 20:04:32.734022      17 shared_informer.go:247] Caches are synced for crd-autoregister 
    I0223 20:04:32.924994      17 shared_informer.go:266] stop requested
    I0223 20:04:32.925192      17 healthz.go:266] informer-sync,poststarthook/rbac/bootstrap-roles,poststarthook/scheduling/bootstrap-system-priority-classes check failed: readyz
    [-]informer-sync failed: 1 informers not started yet: [*v1.Secret]
    [-]poststarthook/rbac/bootstrap-roles failed: not finished
    [-]poststarthook/scheduling/bootstrap-system-priority-classes failed: not finished
    I0223 20:04:32.940170      17 cacher.go:782] cacher (*coordination.Lease): 3 objects queued in incoming channel.
    I0223 20:04:32.940285      17 cacher.go:782] cacher (*coordination.Lease): 4 objects queued in incoming channel.
    I0223 20:04:32.940453      17 cacher.go:782] cacher (*coordination.Lease): 5 objects queued in incoming channel.
    I0223 20:04:32.940509      17 cacher.go:782] cacher (*coordination.Lease): 6 objects queued in incoming channel.
    I0223 20:04:32.950683      17 cacher.go:782] cacher (*coordination.Lease): 5 objects queued in incoming channel.
    I0223 20:04:32.950722      17 cacher.go:782] cacher (*coordination.Lease): 6 objects queued in incoming channel.
    I0223 20:04:33.047024      17 storage_scheduling.go:148] all system priority classes are created successfully or already exist.
    I0223 20:04:33.065837      17 healthz.go:266] poststarthook/rbac/bootstrap-roles check failed: readyz
    [-]poststarthook/rbac/bootstrap-roles failed: not finished
    I0223 20:04:33.121512      17 patch_genericapiserver.go:120] Loopback request to "/api/v1/namespaces/kube-system/configmaps/extension-apiserver-authentication" (user agent "cluster-kube-apiserver-operator/v0.0.0 (linux/amd64) kubernetes/$Format") before server is ready. This client probably does not watch /readyz and might get inconsistent answers.
    I0223 20:04:33.150865      17 patch_genericapiserver.go:120] Loopback request to "/api/v1/namespaces/openshift-kube-apiserver/pods/kube-apiserver-ip-10-0-171-12.ec2.internal" (user agent "cluster-kube-apiserver-operator/v0.0.0 (linux/amd64) kubernetes/$Format") before server is ready. This client probably does not watch /readyz and might get inconsistent answers.
    I0223 20:04:33.152880      17 patch_genericapiserver.go:120] Loopback request to "/api/v1/namespaces/kube-system/configmaps/extension-apiserver-authentication" (user agent "cluster-kube-apiserver-operator/v0.0.0 (linux/amd64) kubernetes/$Format") before server is ready. This client probably does not watch /readyz and might get inconsistent answers.
    I0223 20:04:33.160486      17 patch_genericapiserver.go:120] Loopback request to "/api/v1/nodes/ip-10-0-171-12.ec2.internal" (user agent "cluster-kube-apiserver-operator/v0.0.0 (linux/amd64) kubernetes/$Format") before server is ready. This client probably does not watch /readyz and might get inconsistent answers.
    I0223 20:04:33.163211      17 patch_genericapiserver.go:120] Loopback request to "/api/v1/namespaces/kube-system/configmaps" (user agent "cluster-kube-apiserver-operator/v0.0.0 (linux/amd64) kubernetes/$Format") before server is ready. This client probably does not watch /readyz and might get inconsistent answers.
    I0223 20:04:33.164803      17 healthz.go:266] poststarthook/rbac/bootstrap-roles check failed: readyz
    [-]poststarthook/rbac/bootstrap-roles failed: not finished
    I0223 20:04:33.165803      17 patch_genericapiserver.go:120] Loopback request to "/api/v1/namespaces/kube-system/configmaps" (user agent "cluster-kube-apiserver-operator/v0.0.0 (linux/amd64) kubernetes/$Format") before server is ready. This client probably does not watch /readyz and might get inconsistent answers.
    I0223 20:04:33.169124      17 patch_genericapiserver.go:120] Loopback request to "/api/v1/namespaces/kube-system/configmaps" (user agent "cluster-kube-apiserver-operator/v0.0.0 (linux/amd64) kubernetes/$Format") before server is ready. This client probably does not watch /readyz and might get inconsistent answers.
    I0223 20:04:33.169737      17 patch_genericapiserver.go:120] Loopback request to "/api/v1/namespaces/kube-system/configmaps" (user agent "cluster-kube-apiserver-operator/v0.0.0 (linux/amd64) kubernetes/$Format") before server is ready. This client probably does not watch /readyz and might get inconsistent answers.
    I0223 20:04:33.172355      17 patch_genericapiserver.go:120] Loopback request to "/api/v1/namespaces/kube-system/configmaps" (user agent "cluster-kube-apiserver-operator/v0.0.0 (linux/amd64) kubernetes/$Format") before server is ready. This client probably does not watch /readyz and might get inconsistent answers.
    I0223 20:04:33.173779      17 patch_genericapiserver.go:120] Loopback request to "/apis/apiextensions.k8s.io/v1/customresourcedefinitions" (user agent "cluster-kube-apiserver-operator/v0.0.0 (linux/amd64) kubernetes/$Format") before server is ready. This client probably does not watch /readyz and might get inconsistent answers.
    I0223 20:04:33.178357      17 patch_genericapiserver.go:120] Loopback request to "/api/v1/namespaces/openshift-kube-apiserver/secrets" (user agent "cluster-kube-apiserver-operator/v0.0.0 (linux/amd64) kubernetes/$Format") before server is ready. This client probably does not watch /readyz and might get inconsistent answers.
    I0223 20:04:33.191305      17 patch_genericapiserver.go:120] Loopback request to "/api/v1/namespaces/kube-system/configmaps" (user agent "cluster-kube-apiserver-operator/v0.0.0 (linux/amd64) kubernetes/$Format") before server is ready. This client probably does not watch /readyz and might get inconsistent answers.
    I0223 20:04:33.300656      17 healthz.go:266] poststarthook/rbac/bootstrap-roles check failed: readyz
    [-]poststarthook/rbac/bootstrap-roles failed: not finished
    I0223 20:04:33.418876      17 patch_genericapiserver.go:120] Loopback request to "/api/v1/namespaces/openshift-kube-apiserver/secrets" (user agent "cluster-kube-apiserver-operator/v0.0.0 (linux/amd64) kubernetes/$Format") before server is ready. This client probably does not watch /readyz and might get inconsistent answers.
    I0223 20:04:33.419887      17 cacher.go:782] cacher (*core.Endpoints): 1 objects queued in incoming channel.
    I0223 20:04:33.419983      17 cacher.go:782] cacher (*core.Endpoints): 2 objects queued in incoming channel.
    I0223 20:04:33.426612      17 healthz.go:266] poststarthook/rbac/bootstrap-roles check failed: readyz
    [-]poststarthook/rbac/bootstrap-roles failed: not finished
    I0223 20:04:33.458762      17 cacher.go:782] cacher (*coordination.Lease): 7 objects queued in incoming channel.
    I0223 20:04:33.458798      17 cacher.go:782] cacher (*coordination.Lease): 8 objects queued in incoming channel.
    I0223 20:04:33.459272      17 cacher.go:782] cacher (*coordination.Lease): 7 objects queued in incoming channel.
    I0223 20:04:33.459295      17 cacher.go:782] cacher (*coordination.Lease): 8 objects queued in incoming channel.
    I0223 20:04:33.459313      17 cacher.go:782] cacher (*coordination.Lease): 9 objects queued in incoming channel.
    I0223 20:04:33.459323      17 cacher.go:782] cacher (*coordination.Lease): 10 objects queued in incoming channel.
    I0223 20:04:33.507334      17 healthz.go:266] poststarthook/rbac/bootstrap-roles check failed: readyz
    [-]poststarthook/rbac/bootstrap-roles failed: not finished
    I0223 20:04:33.571645      17 patch_genericapiserver.go:120] Loopback request to "/api/v1/namespaces/openshift-kube-apiserver/configmaps" (user agent "cluster-kube-apiserver-operator/v0.0.0 (linux/amd64) kubernetes/$Format") before server is ready. This client probably does not watch /readyz and might get inconsistent answers.
    I0223 20:04:33.633571      17 healthz.go:266] poststarthook/rbac/bootstrap-roles check failed: readyz
    [-]poststarthook/rbac/bootstrap-roles failed: not finished
    I0223 20:04:33.643887      17 patch_genericapiserver.go:120] Loopback request to "/api/v1/namespaces/openshift-kube-apiserver/configmaps" (user agent "cluster-kube-apiserver-operator/v0.0.0 (linux/amd64) kubernetes/$Format") before server is ready. This client probably does not watch /readyz and might get inconsistent answers.
    I0223 20:04:33.668784      17 healthz.go:266] poststarthook/rbac/bootstrap-roles check failed: readyz
    [-]poststarthook/rbac/bootstrap-roles failed: not finished
    I0223 20:04:33.763936      17 healthz.go:266] poststarthook/rbac/bootstrap-roles check failed: readyz
    [-]poststarthook/rbac/bootstrap-roles failed: not finished
    I0223 20:04:33.767765      17 healthz.go:266] poststarthook/rbac/bootstrap-roles check failed: readyz
    [-]poststarthook/rbac/bootstrap-roles failed: not finished
    I0223 20:04:33.769133      17 patch_genericapiserver.go:120] Loopback request to "/api/v1/namespaces/openshift-kube-apiserver/secrets/user-serving-cert" (user agent "cluster-kube-apiserver-operator/v0.0.0 (linux/amd64) kubernetes/$Format") before server is ready. This client probably does not watch /readyz and might get inconsistent answers.
    I0223 20:04:33.789537      17 patch_genericapiserver.go:120] Loopback request to "/api/v1/namespaces/openshift-kube-apiserver/secrets/user-serving-cert-000" (user agent "cluster-kube-apiserver-operator/v0.0.0 (linux/amd64) kubernetes/$Format") before server is ready. This client probably does not watch /readyz and might get inconsistent answers.
    I0223 20:04:33.814748      17 patch_genericapiserver.go:120] Loopback request to "/api/v1/namespaces/openshift-kube-apiserver/secrets/user-serving-cert-001" (user agent "cluster-kube-apiserver-operator/v0.0.0 (linux/amd64) kubernetes/$Format") before server is ready. This client probably does not watch /readyz and might get inconsistent answers.
    I0223 20:04:33.837839      17 patch_genericapiserver.go:120] Loopback request to "/api/v1/namespaces/openshift-kube-apiserver/secrets/user-serving-cert-002" (user agent "cluster-kube-apiserver-operator/v0.0.0 (linux/amd64) kubernetes/$Format") before server is ready. This client probably does not watch /readyz and might get inconsistent answers.
    I0223 20:04:33.852398      17 patch_genericapiserver.go:120] Loopback request to "/api/v1/namespaces/openshift-kube-apiserver/secrets/user-serving-cert-003" (user agent "cluster-kube-apiserver-operator/v0.0.0 (linux/amd64) kubernetes/$Format") before server is ready. This client probably does not watch /readyz and might get inconsistent answers.
    I0223 20:04:33.858925      17 patch_genericapiserver.go:120] Loopback request to "/api/v1/namespaces/openshift-kube-apiserver/secrets/user-serving-cert-004" (user agent "cluster-kube-apiserver-operator/v0.0.0 (linux/amd64) kubernetes/$Format") before server is ready. This client probably does not watch /readyz and might get inconsistent answers.
    I0223 20:04:33.868831      17 healthz.go:266] poststarthook/rbac/bootstrap-roles check failed: readyz
    [-]poststarthook/rbac/bootstrap-roles failed: not finished
    I0223 20:04:33.871184      17 healthz.go:266] poststarthook/rbac/bootstrap-roles check failed: readyz
    [-]poststarthook/rbac/bootstrap-roles failed: not finished
    I0223 20:04:33.873109      17 patch_genericapiserver.go:120] Loopback request to "/api/v1/namespaces/openshift-kube-apiserver/secrets/user-serving-cert-005" (user agent "cluster-kube-apiserver-operator/v0.0.0 (linux/amd64) kubernetes/$Format") before server is ready. This client probably does not watch /readyz and might get inconsistent answers.
    I0223 20:04:33.911078      17 patch_genericapiserver.go:120] Loopback request to "/api/v1/namespaces/openshift-kube-apiserver/secrets/user-serving-cert-006" (user agent "cluster-kube-apiserver-operator/v0.0.0 (linux/amd64) kubernetes/$Format") before server is ready. This client probably does not watch /readyz and might get inconsistent answers.
    I0223 20:04:33.928095      17 patch_genericapiserver.go:120] Loopback request to "/api/v1/namespaces/openshift-kube-apiserver/secrets/user-serving-cert-007" (user agent "cluster-kube-apiserver-operator/v0.0.0 (linux/amd64) kubernetes/$Format") before server is ready. This client probably does not watch /readyz and might get inconsistent answers.
    I0223 20:04:33.937264      17 patch_genericapiserver.go:120] Loopback request to "/api/v1/namespaces/openshift-kube-apiserver/secrets/user-serving-cert-008" (user agent "cluster-kube-apiserver-operator/v0.0.0 (linux/amd64) kubernetes/$Format") before server is ready. This client probably does not watch /readyz and might get inconsistent answers.
    I0223 20:04:33.960762      17 healthz.go:266] poststarthook/rbac/bootstrap-roles check failed: readyz
    [-]poststarthook/rbac/bootstrap-roles failed: not finished
    I0223 20:04:33.972472      17 patch_genericapiserver.go:120] Loopback request to "/api/v1/namespaces/openshift-kube-apiserver/secrets/user-serving-cert-009" (user agent "cluster-kube-apiserver-operator/v0.0.0 (linux/amd64) kubernetes/$Format") before server is ready. This client probably does not watch /readyz and might get inconsistent answers.
    I0223 20:04:34.017131      17 patch_genericapiserver.go:120] Loopback request to "/apis/apiextensions.k8s.io/v1/customresourcedefinitions" (user agent "cluster-kube-apiserver-operator/v0.0.0 (linux/amd64) kubernetes/$Format") before server is ready. This client probably does not watch /readyz and might get inconsistent answers.
    I0223 20:04:34.057750      17 healthz.go:266] poststarthook/rbac/bootstrap-roles check failed: readyz
    [-]poststarthook/rbac/bootstrap-roles failed: not finished
    I0223 20:04:34.074890      17 patch_genericapiserver.go:120] Loopback request to "/apis/controlplane.operator.openshift.io/v1alpha1/namespaces/openshift-kube-apiserver/podnetworkconnectivitychecks" (user agent "cluster-kube-apiserver-operator/v0.0.0 (linux/amd64) kubernetes/$Format") before server is ready. This client probably does not watch /readyz and might get inconsistent answers.
    I0223 20:04:34.079881      17 patch_genericapiserver.go:120] Loopback request to "/api/v1/namespaces/openshift-kube-apiserver/secrets" (user agent "cluster-kube-apiserver-operator/v0.0.0 (linux/amd64) kubernetes/$Format") before server is ready. This client probably does not watch /readyz and might get inconsistent answers.
    I0223 20:04:34.189229      17 healthz.go:266] poststarthook/rbac/bootstrap-roles check failed: readyz
    [-]poststarthook/rbac/bootstrap-roles failed: not finished
    I0223 20:04:34.212240      17 patch_genericapiserver.go:120] Loopback request to "/api/v1/namespaces/openshift-kube-apiserver/secrets" (user agent "cluster-kube-apiserver-operator/v0.0.0 (linux/amd64) kubernetes/$Format") before server is ready. This client probably does not watch /readyz and might get inconsistent answers.
    I0223 20:04:34.214175      17 healthz.go:266] poststarthook/rbac/bootstrap-roles check failed: readyz
    [-]poststarthook/rbac/bootstrap-roles failed: not finished
    I0223 20:04:34.215264      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:34.215327      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:34.257030      17 store.go:1376] Monitoring podnetworkconnectivitychecks.controlplane.operator.openshift.io count at <storage-prefix>//controlplane.operator.openshift.io/podnetworkconnectivitychecks
    I0223 20:04:34.303650      17 healthz.go:266] poststarthook/rbac/bootstrap-roles check failed: readyz
    [-]poststarthook/rbac/bootstrap-roles failed: not finished
    I0223 20:04:34.314350      17 patch_genericapiserver.go:120] Loopback request to "/apis/controlplane.operator.openshift.io/v1alpha1/namespaces/openshift-kube-apiserver/podnetworkconnectivitychecks" (user agent "cluster-kube-apiserver-operator/v0.0.0 (linux/amd64) kubernetes/$Format") before server is ready. This client probably does not watch /readyz and might get inconsistent answers.
    I0223 20:04:34.427213      17 healthz.go:266] poststarthook/rbac/bootstrap-roles check failed: readyz
    [-]poststarthook/rbac/bootstrap-roles failed: not finished
    I0223 20:04:34.477472      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    I0223 20:04:34.498302      17 healthz.go:266] poststarthook/rbac/bootstrap-roles check failed: readyz
    [-]poststarthook/rbac/bootstrap-roles failed: not finished
    I0223 20:04:34.500051      17 patch_genericapiserver.go:120] Loopback request to "/api/v1/namespaces/openshift-kube-controller-manager/configmaps" (user agent "cluster-kube-controller-manager-operator/v0.0.0 (linux/amd64) kubernetes/$Format") before server is ready. This client probably does not watch /readyz and might get inconsistent answers.
    I0223 20:04:34.563147      17 healthz.go:266] poststarthook/rbac/bootstrap-roles check failed: readyz
    [-]poststarthook/rbac/bootstrap-roles failed: not finished
    I0223 20:04:34.659749      17 aggregator.go:234] Finished OpenAPI spec generation after 2.549381362s
    I0223 20:04:34.659842      17 controller.go:132] OpenAPI AggregationController: action for item : Nothing (removed from the queue).
    I0223 20:04:34.659867      17 controller.go:132] OpenAPI AggregationController: action for item k8s_internal_local_delegation_chain_0000000000: Nothing (removed from the queue).
    I0223 20:04:34.659956      17 aggregator.go:231] Updating OpenAPI spec because v1.packages.operators.coreos.com is updated
    I0223 20:04:34.666744      17 healthz.go:266] poststarthook/rbac/bootstrap-roles check failed: readyz
    [-]poststarthook/rbac/bootstrap-roles failed: not finished
    I0223 20:04:34.796042      17 healthz.go:266] poststarthook/rbac/bootstrap-roles check failed: readyz
    [-]poststarthook/rbac/bootstrap-roles failed: not finished
    I0223 20:04:34.857968      17 healthz.go:266] poststarthook/rbac/bootstrap-roles check failed: readyz
    [-]poststarthook/rbac/bootstrap-roles failed: not finished
    I0223 20:04:34.860151      17 healthz.go:266] poststarthook/rbac/bootstrap-roles check failed: readyz
    [-]poststarthook/rbac/bootstrap-roles failed: not finished
    I0223 20:04:34.981679      17 healthz.go:266] poststarthook/rbac/bootstrap-roles check failed: readyz
    [-]poststarthook/rbac/bootstrap-roles failed: not finished
    I0223 20:04:35.050761      17 healthz.go:266] poststarthook/rbac/bootstrap-roles check failed: readyz
    [-]poststarthook/rbac/bootstrap-roles failed: not finished
    I0223 20:04:35.062969      17 healthz.go:266] poststarthook/rbac/bootstrap-roles check failed: readyz
    [-]poststarthook/rbac/bootstrap-roles failed: not finished
    I0223 20:04:35.157585      17 healthz.go:266] poststarthook/rbac/bootstrap-roles check failed: readyz
    [-]poststarthook/rbac/bootstrap-roles failed: not finished
    I0223 20:04:35.255351      17 healthz.go:266] poststarthook/rbac/bootstrap-roles check failed: readyz
    [-]poststarthook/rbac/bootstrap-roles failed: not finished
    I0223 20:04:35.259441      17 healthz.go:266] poststarthook/rbac/bootstrap-roles check failed: readyz
    [-]poststarthook/rbac/bootstrap-roles failed: not finished
    I0223 20:04:35.380266      17 healthz.go:266] poststarthook/rbac/bootstrap-roles check failed: readyz
    [-]poststarthook/rbac/bootstrap-roles failed: not finished
    I0223 20:04:35.431042      17 patch_genericapiserver.go:120] Loopback request to "/api/v1/namespaces/openshift-kube-controller-manager/configmaps" (user agent "cluster-kube-controller-manager-operator/v0.0.0 (linux/amd64) kubernetes/$Format") before server is ready. This client probably does not watch /readyz and might get inconsistent answers.
    I0223 20:04:35.469166      17 healthz.go:266] poststarthook/rbac/bootstrap-roles check failed: readyz
    [-]poststarthook/rbac/bootstrap-roles failed: not finished
    I0223 20:04:35.472051      17 patch_genericapiserver.go:120] Loopback request to "/api/v1/namespaces/openshift-kube-controller-manager/configmaps" (user agent "cluster-kube-controller-manager-operator/v0.0.0 (linux/amd64) kubernetes/$Format") before server is ready. This client probably does not watch /readyz and might get inconsistent answers.
    I0223 20:04:35.575842      17 healthz.go:266] poststarthook/rbac/bootstrap-roles check failed: readyz
    [-]poststarthook/rbac/bootstrap-roles failed: not finished
    W0223 20:04:35.760333      17 lease.go:233] Resetting endpoints for master service "kubernetes" to [10.0.137.156 10.0.158.175 10.0.171.12]
    I0223 20:04:35.768469      17 controller.go:606] quota admission added evaluator for: endpoints
    I0223 20:04:35.786850      17 controller.go:606] quota admission added evaluator for: endpointslices.discovery.k8s.io
    I0223 20:04:36.206187      17 aggregator.go:234] Finished OpenAPI spec generation after 1.546206836s
    I0223 20:04:36.206474      17 aggregator.go:231] Updating OpenAPI spec because v1.route.openshift.io is updated
    I0223 20:04:37.595803      17 aggregator.go:234] Finished OpenAPI spec generation after 1.389199945s
    I0223 20:04:37.596067      17 aggregator.go:231] Updating OpenAPI spec because v1beta1.metrics.k8s.io is updated
    I0223 20:04:38.679524      17 aggregator.go:234] Finished OpenAPI spec generation after 1.083426942s
    I0223 20:04:38.679641      17 aggregator.go:231] Updating OpenAPI spec because v1.oauth.openshift.io is updated
    I0223 20:04:40.086041      17 aggregator.go:234] Finished OpenAPI spec generation after 1.406346262s
    I0223 20:04:40.086155      17 aggregator.go:231] Updating OpenAPI spec because v1.admission.work.open-cluster-management.io is updated
    I0223 20:04:41.167647      17 aggregator.go:234] Finished OpenAPI spec generation after 1.081471694s
    I0223 20:04:41.167751      17 aggregator.go:231] Updating OpenAPI spec because v1.template.openshift.io is updated
    I0223 20:04:42.069600      17 trace.go:205] Trace[1853756192]: "Reflector ListAndWatch" name:github.com/openshift/client-go/user/informers/externalversions/factory.go:101 (23-Feb-2021 20:04:31.988) (total time: 10081ms):
    Trace[1853756192]: ---"Objects listed" 10080ms (20:04:00.069)
    Trace[1853756192]: [10.081007463s] [10.081007463s] END
    I0223 20:04:42.076148      17 trace.go:205] Trace[193639072]: "Reflector ListAndWatch" name:github.com/openshift/client-go/user/informers/externalversions/factory.go:101 (23-Feb-2021 20:04:31.993) (total time: 10082ms):
    Trace[193639072]: ---"Objects listed" 10082ms (20:04:00.076)
    Trace[193639072]: [10.082518515s] [10.082518515s] END
    I0223 20:04:42.077135      17 trace.go:205] Trace[362510276]: "Reflector ListAndWatch" name:github.com/openshift/client-go/oauth/informers/externalversions/factory.go:101 (23-Feb-2021 20:04:31.988) (total time: 10088ms):
    Trace[362510276]: ---"Objects listed" 10088ms (20:04:00.077)
    Trace[362510276]: [10.088151799s] [10.088151799s] END
    I0223 20:04:42.101985      17 aggregator.go:234] Finished OpenAPI spec generation after 934.212058ms
    I0223 20:04:42.102126      17 aggregator.go:231] Updating OpenAPI spec because v1.security.openshift.io is updated
    I0223 20:04:42.278464      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:42.278519      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:42.296238      17 store.go:1376] Monitoring securitycontextconstraints.security.openshift.io count at <storage-prefix>//security.openshift.io/securitycontextconstraints
    I0223 20:04:42.327807      17 trace.go:205] Trace[524302058]: "Reflector ListAndWatch" name:github.com/openshift/client-go/security/informers/externalversions/factory.go:101 (23-Feb-2021 20:04:32.047) (total time: 10280ms):
    Trace[524302058]: ---"Objects listed" 10280ms (20:04:00.327)
    Trace[524302058]: [10.280110214s] [10.280110214s] END
    E0223 20:04:42.332600      17 customresource_handler.go:669] error building openapi models for clusterresourcequotas.quota.openshift.io: ERROR $root.definitions.io.openshift.quota.v1.ClusterResourceQuota.properties.spec.properties.quota.properties.hard.additionalProperties.schema has invalid property: anyOf
    ERROR $root.definitions.io.openshift.quota.v1.ClusterResourceQuota.properties.status.properties.namespaces.items.<array>.properties.status.properties.hard.additionalProperties.schema has invalid property: anyOf
    ERROR $root.definitions.io.openshift.quota.v1.ClusterResourceQuota.properties.status.properties.namespaces.items.<array>.properties.status.properties.used.additionalProperties.schema has invalid property: anyOf
    ERROR $root.definitions.io.openshift.quota.v1.ClusterResourceQuota.properties.status.properties.total.properties.hard.additionalProperties.schema has invalid property: anyOf
    ERROR $root.definitions.io.openshift.quota.v1.ClusterResourceQuota.properties.status.properties.total.properties.used.additionalProperties.schema has invalid property: anyOf
    I0223 20:04:42.333481      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:04:42.333511      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:04:42.338050      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    I0223 20:04:42.356885      17 store.go:1376] Monitoring clusterresourcequotas.quota.openshift.io count at <storage-prefix>//quota.openshift.io/clusterresourcequotas
    I0223 20:04:42.361422      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    I0223 20:04:42.365515      17 trace.go:205] Trace[378391823]: "Reflector ListAndWatch" name:github.com/openshift/client-go/quota/informers/externalversions/factory.go:101 (23-Feb-2021 20:04:32.047) (total time: 10318ms):
    Trace[378391823]: ---"Objects listed" 10318ms (20:04:00.365)
    Trace[378391823]: [10.318187419s] [10.318187419s] END
    I0223 20:04:43.069230      17 aggregator.go:234] Finished OpenAPI spec generation after 967.069807ms
    I0223 20:04:43.069341      17 aggregator.go:231] Updating OpenAPI spec because v1beta1.proxy.open-cluster-management.io is updated
    I0223 20:04:44.177132      17 aggregator.go:234] Finished OpenAPI spec generation after 1.107754008s
    I0223 20:04:44.177242      17 aggregator.go:231] Updating OpenAPI spec because v1beta1.webhook.certmanager.k8s.io is updated
    I0223 20:04:45.031672      17 aggregator.go:234] Finished OpenAPI spec generation after 854.405751ms
    I0223 20:04:45.031836      17 aggregator.go:231] Updating OpenAPI spec because v1.build.openshift.io is updated
    I0223 20:04:46.104733      17 aggregator.go:234] Finished OpenAPI spec generation after 1.072858175s
    I0223 20:04:46.104862      17 aggregator.go:231] Updating OpenAPI spec because v1.authorization.openshift.io is updated
    I0223 20:04:47.008714      17 aggregator.go:234] Finished OpenAPI spec generation after 903.765534ms
    I0223 20:04:47.008818      17 aggregator.go:231] Updating OpenAPI spec because v1.user.openshift.io is updated
    I0223 20:04:47.866641      17 aggregator.go:234] Finished OpenAPI spec generation after 857.785065ms
    I0223 20:04:47.866751      17 aggregator.go:231] Updating OpenAPI spec because v1.image.openshift.io is updated
    I0223 20:04:48.942829      17 aggregator.go:234] Finished OpenAPI spec generation after 1.076055072s
    I0223 20:04:48.942964      17 aggregator.go:231] Updating OpenAPI spec because v1.admission.hive.openshift.io is updated
    I0223 20:04:49.792957      17 aggregator.go:234] Finished OpenAPI spec generation after 849.967487ms
    I0223 20:04:49.793133      17 aggregator.go:231] Updating OpenAPI spec because v1.project.openshift.io is updated
    I0223 20:04:50.801003      17 aggregator.go:234] Finished OpenAPI spec generation after 1.007841496s
    I0223 20:04:50.801114      17 aggregator.go:231] Updating OpenAPI spec because v1.apps.openshift.io is updated
    I0223 20:04:51.755148      17 aggregator.go:234] Finished OpenAPI spec generation after 954.011929ms
    I0223 20:04:51.756232      17 aggregator.go:231] Updating OpenAPI spec because v1.admission.cluster.open-cluster-management.io is updated
    I0223 20:04:52.779737      17 aggregator.go:234] Finished OpenAPI spec generation after 1.023467174s
    I0223 20:04:52.787770      17 aggregator.go:231] Updating OpenAPI spec because v1.quota.openshift.io is updated
    I0223 20:04:54.072054      17 aggregator.go:234] Finished OpenAPI spec generation after 1.284254972s
    I0223 20:04:54.101510      17 aggregator.go:231] Updating OpenAPI spec because v1.packages.operators.coreos.com is updated
    I0223 20:04:55.205364      17 aggregator.go:234] Finished OpenAPI spec generation after 1.103818735s
    I0223 20:04:58.632214      17 aggregator.go:231] Updating OpenAPI spec because k8s_internal_local_delegation_chain_0000000002 is updated
    I0223 20:05:00.447868      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:05:00.447947      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:05:00.447967      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:05:00.448331      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02ed484b0, {CONNECTING <nil>}
    I0223 20:05:00.463393      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02ed484b0, {READY <nil>}
    I0223 20:05:00.465256      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:05:00.952604      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:05:00.952730      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:05:00.952766      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:05:00.952976      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01e5dc460, {CONNECTING <nil>}
    I0223 20:05:01.047334      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01e5dc460, {READY <nil>}
    I0223 20:05:01.049071      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:05:01.184226      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:05:01.184331      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:05:01.184349      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:05:01.184580      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01b5e88d0, {CONNECTING <nil>}
    I0223 20:05:01.196196      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01b5e88d0, {READY <nil>}
    I0223 20:05:01.197034      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:05:01.715749      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:05:01.715829      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:05:01.715846      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:05:01.716165      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02eb64780, {CONNECTING <nil>}
    I0223 20:05:01.735664      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02eb64780, {READY <nil>}
    I0223 20:05:01.737662      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:05:03.062274      17 aggregator.go:234] Finished OpenAPI spec generation after 4.430017361s
    I0223 20:05:03.445295      17 aggregator.go:231] Updating OpenAPI spec because v1.route.openshift.io is updated
    I0223 20:05:04.897602      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:05:04.897657      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:05:04.915464      17 store.go:1376] Monitoring clusterversions.config.openshift.io count at <storage-prefix>//config.openshift.io/clusterversions
    I0223 20:05:04.944492      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    I0223 20:05:07.185484      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:05:07.185544      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:05:07.205049      17 store.go:1376] Monitoring configurations.serving.knative.dev count at <storage-prefix>//serving.knative.dev/configurations
    I0223 20:05:07.228437      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    I0223 20:05:07.654138      17 aggregator.go:234] Finished OpenAPI spec generation after 4.208799782s
    E0223 20:05:07.663276      17 customresource_handler.go:669] error building openapi models for clusterserviceversions.operators.coreos.com: ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.strategy.properties.rollingUpdate.properties.maxSurge has invalid property: anyOf
    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.strategy.properties.rollingUpdate.properties.maxUnavailable has invalid property: anyOf
    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.containers.items.<array>.properties.env.items.<array>.properties.valueFrom.properties.resourceFieldRef.properties.divisor has invalid property: anyOf
    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.containers.items.<array>.properties.lifecycle.properties.postStart.properties.httpGet.properties.port has invalid property: anyOf
    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.containers.items.<array>.properties.lifecycle.properties.postStart.properties.tcpSocket.properties.port has invalid property: anyOf
    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.containers.items.<array>.properties.lifecycle.properties.preStop.properties.httpGet.properties.port has invalid property: anyOf
    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.containers.items.<array>.properties.lifecycle.properties.preStop.properties.tcpSocket.properties.port has invalid property: anyOf
    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.containers.items.<array>.properties.livenessProbe.properties.httpGet.properties.port has invalid property: anyOf
    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.containers.items.<array>.properties.livenessProbe.properties.tcpSocket.properties.port has invalid property: anyOf
    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.containers.items.<array>.properties.readinessProbe.properties.httpGet.properties.port has invalid property: anyOf
    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.containers.items.<array>.properties.readinessProbe.properties.tcpSocket.properties.port has invalid property: anyOf
    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.containers.items.<array>.properties.resources.properties.limits.additionalProperties.schema has invalid property: anyOf
    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.containers.items.<array>.properties.resources.properties.requests.additionalProperties.schema has invalid property: anyOf
    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.containers.items.<array>.properties.startupProbe.properties.httpGet.properties.port has invalid property: anyOf
    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.containers.items.<array>.properties.startupProbe.properties.tcpSocket.properties.port has invalid property: anyOf
    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.ephemeralContainers.items.<array>.properties.env.items.<array>.properties.valueFrom.properties.resourceFieldRef.properties.divisor has invalid property: anyOf
    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.ephemeralContainers.items.<array>.properties.lifecycle.properties.postStart.properties.httpGet.properties.port has invalid property: anyOf
    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.ephemeralContainers.items.<array>.properties.lifecycle.properties.postStart.properties.tcpSocket.properties.port has invalid property: anyOf
    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.ephemeralContainers.items.<array>.properties.lifecycle.properties.preStop.properties.httpGet.properties.port has invalid property: anyOf
    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.ephemeralContainers.items.<array>.properties.lifecycle.properties.preStop.properties.tcpSocket.properties.port has invalid property: anyOf
    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.ephemeralContainers.items.<array>.properties.livenessProbe.properties.httpGet.properties.port has invalid property: anyOf
    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.ephemeralContainers.items.<array>.properties.livenessProbe.properties.tcpSocket.properties.port has invalid property: anyOf
    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.ephemeralContainers.items.<array>.properties.readinessProbe.properties.httpGet.properties.port has invalid property: anyOf
    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.ephemeralContainers.items.<array>.properties.readinessProbe.properties.tcpSocket.properties.port has invalid property: anyOf
    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.ephemeralContainers.items.<array>.properties.resources.properties.limits.additionalProperties.schema has invalid property: anyOf
    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.ephemeralContainers.items.<array>.properties.resources.properties.requests.additionalProperties.schema has invalid property: anyOf
    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.ephemeralContainers.items.<array>.properties.startupProbe.properties.httpGet.properties.port has invalid property: anyOf
    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.ephemeralContainers.items.<array>.properties.startupProbe.properties.tcpSocket.properties.port has invalid property: anyOf
    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.initContainers.items.<array>.properties.env.items.<array>.properties.valueFrom.properties.resourceFieldRef.properties.divisor has invalid property: anyOf
    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.initContainers.items.<array>.properties.lifecycle.properties.postStart.properties.httpGet.properties.port has invalid property: anyOf
    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.initContainers.items.<array>.properties.lifecycle.properties.postStart.properties.tcpSocket.properties.port has invalid property: anyOf
    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.initContainers.items.<array>.properties.lifecycle.properties.preStop.properties.httpGet.properties.port has invalid property: anyOf
    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.initContainers.items.<array>.properties.lifecycle.properties.preStop.properties.tcpSocket.properties.port has invalid property: anyOf
    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.initContainers.items.<array>.properties.livenessProbe.properties.httpGet.properties.port has invalid property: anyOf
    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.initContainers.items.<array>.properties.livenessProbe.properties.tcpSocket.properties.port has invalid property: anyOf
    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.initContainers.items.<array>.properties.readinessProbe.properties.httpGet.properties.port has invalid property: anyOf
    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.initContainers.items.<array>.properties.readinessProbe.properties.tcpSocket.properties.port has invalid property: anyOf
    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.initContainers.items.<array>.properties.resources.properties.limits.additionalProperties.schema has invalid property: anyOf
    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.initContainers.items.<array>.properties.resources.properties.requests.additionalProperties.schema has invalid property: anyOf
    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.initContainers.items.<array>.properties.startupProbe.properties.httpGet.properties.port has invalid property: anyOf
    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.initContainers.items.<array>.properties.startupProbe.properties.tcpSocket.properties.port has invalid property: anyOf
    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.overhead.additionalProperties.schema has invalid property: anyOf
    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.volumes.items.<array>.properties.downwardAPI.properties.items.items.<array>.properties.resourceFieldRef.properties.divisor has invalid property: anyOf
    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.volumes.items.<array>.properties.emptyDir.properties.sizeLimit has invalid property: anyOf
    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.volumes.items.<array>.properties.ephemeral.properties.volumeClaimTemplate.properties.spec.properties.resources.properties.limits.additionalProperties.schema has invalid property: anyOf
    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.volumes.items.<array>.properties.ephemeral.properties.volumeClaimTemplate.properties.spec.properties.resources.properties.requests.additionalProperties.schema has invalid property: anyOf
    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.volumes.items.<array>.properties.projected.properties.sources.items.<array>.properties.downwardAPI.properties.items.items.<array>.properties.resourceFieldRef.properties.divisor has invalid property: anyOf
    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.webhookdefinitions.items.<array>.properties.targetPort has invalid property: anyOf
    I0223 20:05:07.667701      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:05:07.667752      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:05:07.678136      17 store.go:1376] Monitoring clusterserviceversions.operators.coreos.com count at <storage-prefix>//operators.coreos.com/clusterserviceversions
    I0223 20:05:07.691254      17 aggregator.go:231] Updating OpenAPI spec because v1beta1.metrics.k8s.io is updated
    I0223 20:05:08.674654      17 trace.go:205] Trace[1868691782]: "List etcd3" key:/operators.coreos.com/clusterserviceversions,resourceVersion:,resourceVersionMatch:,limit:10000,continue: (23-Feb-2021 20:05:07.679) (total time: 995ms):
    Trace[1868691782]: [995.4145ms] [995.4145ms] END
    I0223 20:05:08.676188      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    I0223 20:05:08.679737      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:05:08.679784      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:05:08.698161      17 store.go:1376] Monitoring revisions.serving.knative.dev count at <storage-prefix>//serving.knative.dev/revisions
    I0223 20:05:08.724867      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    I0223 20:05:08.754671      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:05:08.754723      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:05:08.767631      17 store.go:1376] Monitoring subscriptions.messaging.knative.dev count at <storage-prefix>//messaging.knative.dev/subscriptions
    I0223 20:05:08.769534      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:05:08.769574      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:05:08.789584      17 store.go:1376] Monitoring subscriptions.messaging.knative.dev count at <storage-prefix>//messaging.knative.dev/subscriptions
    I0223 20:05:08.810383      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    I0223 20:05:08.870012      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:05:08.870070      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:05:08.884241      17 store.go:1376] Monitoring sinkbindings.sources.knative.dev count at <storage-prefix>//sources.knative.dev/sinkbindings
    I0223 20:05:08.888348      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:05:08.888560      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:05:08.893263      17 trace.go:205] Trace[779616982]: "Call conversion webhook" custom-resource-definition:subscriptions.messaging.knative.dev,desired-api-version:messaging.knative.dev/v1beta1,object-count:1,UID:dc30bc31-0391-49ed-8c76-86daaa780e14 (23-Feb-2021 20:05:08.794) (total time: 98ms):
    Trace[779616982]: ---"Request completed" 98ms (20:05:00.892)
    Trace[779616982]: [98.488399ms] [98.488399ms] END
    I0223 20:05:08.906377      17 store.go:1376] Monitoring sinkbindings.sources.knative.dev count at <storage-prefix>//sources.knative.dev/sinkbindings
    I0223 20:05:08.908020      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:05:08.908056      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:05:08.930733      17 store.go:1376] Monitoring sinkbindings.sources.knative.dev count at <storage-prefix>//sources.knative.dev/sinkbindings
    I0223 20:05:08.932408      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:05:08.932459      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:05:08.942661      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    I0223 20:05:08.946867      17 store.go:1376] Monitoring sinkbindings.sources.knative.dev count at <storage-prefix>//sources.knative.dev/sinkbindings
    I0223 20:05:08.976732      17 trace.go:205] Trace[417800427]: "Call conversion webhook" custom-resource-definition:sinkbindings.sources.knative.dev,desired-api-version:sources.knative.dev/v1alpha1,object-count:1,UID:4b5243e4-7878-436f-be04-be717cb0f5d2 (23-Feb-2021 20:05:08.902) (total time: 74ms):
    Trace[417800427]: ---"Request completed" 74ms (20:05:00.976)
    Trace[417800427]: [74.13198ms] [74.13198ms] END
    I0223 20:05:08.985668      17 trace.go:205] Trace[154168225]: "Call conversion webhook" custom-resource-definition:subscriptions.messaging.knative.dev,desired-api-version:messaging.knative.dev/v1beta1,object-count:1,UID:ae629e81-0e7d-48f1-acd0-a10d6cfbf71d (23-Feb-2021 20:05:08.894) (total time: 91ms):
    Trace[154168225]: ---"Request completed" 91ms (20:05:00.985)
    Trace[154168225]: [91.438968ms] [91.438968ms] END
    I0223 20:05:08.994436      17 trace.go:205] Trace[584246906]: "Call conversion webhook" custom-resource-definition:sinkbindings.sources.knative.dev,desired-api-version:sources.knative.dev/v1alpha2,object-count:1,UID:113685ab-0a01-4a89-a631-7df924e2a234 (23-Feb-2021 20:05:08.914) (total time: 79ms):
    Trace[584246906]: ---"Request completed" 79ms (20:05:00.994)
    Trace[584246906]: [79.431148ms] [79.431148ms] END
    I0223 20:05:09.018345      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:05:09.018401      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:05:09.031128      17 store.go:1376] Monitoring triggers.eventing.knative.dev count at <storage-prefix>//eventing.knative.dev/triggers
    I0223 20:05:09.032798      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:05:09.032846      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:05:09.051739      17 store.go:1376] Monitoring triggers.eventing.knative.dev count at <storage-prefix>//eventing.knative.dev/triggers
    I0223 20:05:09.061374      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    I0223 20:05:09.077620      17 trace.go:205] Trace[522766072]: "Call conversion webhook" custom-resource-definition:sinkbindings.sources.knative.dev,desired-api-version:sources.knative.dev/v1alpha2,object-count:1,UID:3f02b86e-279b-48f8-86c5-1f991d16c2bf (23-Feb-2021 20:05:08.995) (total time: 82ms):
    Trace[522766072]: ---"Request completed" 82ms (20:05:00.077)
    Trace[522766072]: [82.519697ms] [82.519697ms] END
    I0223 20:05:09.079213      17 trace.go:205] Trace[1177843340]: "Call conversion webhook" custom-resource-definition:sinkbindings.sources.knative.dev,desired-api-version:sources.knative.dev/v1alpha1,object-count:1,UID:03355f47-7e36-4c38-8fac-5d88274d53f2 (23-Feb-2021 20:05:08.993) (total time: 85ms):
    Trace[1177843340]: ---"Request completed" 85ms (20:05:00.079)
    Trace[1177843340]: [85.564957ms] [85.564957ms] END
    I0223 20:05:09.079479      17 trace.go:205] Trace[1358236459]: "Call conversion webhook" custom-resource-definition:sinkbindings.sources.knative.dev,desired-api-version:sources.knative.dev/v1,object-count:1,UID:014eb05c-1142-4ab5-9afb-821a9c656d20 (23-Feb-2021 20:05:08.993) (total time: 85ms):
    Trace[1358236459]: ---"Request completed" 85ms (20:05:00.079)
    Trace[1358236459]: [85.687911ms] [85.687911ms] END
    I0223 20:05:09.080737      17 trace.go:205] Trace[1389066300]: "Call conversion webhook" custom-resource-definition:subscriptions.messaging.knative.dev,desired-api-version:messaging.knative.dev/v1beta1,object-count:1,UID:b21ca313-1b4a-4860-ab13-c36b8ee2d75c (23-Feb-2021 20:05:08.986) (total time: 94ms):
    Trace[1389066300]: ---"Request completed" 94ms (20:05:00.080)
    Trace[1389066300]: [94.341421ms] [94.341421ms] END
    I0223 20:05:09.088080      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    I0223 20:05:09.176930      17 trace.go:205] Trace[499287539]: "Call conversion webhook" custom-resource-definition:sinkbindings.sources.knative.dev,desired-api-version:sources.knative.dev/v1,object-count:1,UID:d5cf8bb5-5d16-4497-8097-5809bd169e69 (23-Feb-2021 20:05:09.088) (total time: 87ms):
    Trace[499287539]: ---"Request completed" 87ms (20:05:00.176)
    Trace[499287539]: [87.977259ms] [87.977259ms] END
    I0223 20:05:09.178693      17 trace.go:205] Trace[632851168]: "Call conversion webhook" custom-resource-definition:triggers.eventing.knative.dev,desired-api-version:eventing.knative.dev/v1beta1,object-count:1,UID:ecd63ff4-facd-4a3c-b782-751b20615f5b (23-Feb-2021 20:05:09.085) (total time: 93ms):
    Trace[632851168]: ---"Request completed" 92ms (20:05:00.178)
    Trace[632851168]: [93.051535ms] [93.051535ms] END
    I0223 20:05:09.179793      17 trace.go:205] Trace[2084183409]: "Call conversion webhook" custom-resource-definition:subscriptions.messaging.knative.dev,desired-api-version:messaging.knative.dev/v1beta1,object-count:1,UID:d5ed3cee-18f2-4dd4-837e-46b164169981 (23-Feb-2021 20:05:09.087) (total time: 92ms):
    Trace[2084183409]: ---"Request completed" 92ms (20:05:00.179)
    Trace[2084183409]: [92.490416ms] [92.490416ms] END
    I0223 20:05:09.182656      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    I0223 20:05:09.183483      17 trace.go:205] Trace[240293913]: "Call conversion webhook" custom-resource-definition:sinkbindings.sources.knative.dev,desired-api-version:sources.knative.dev/v1alpha2,object-count:1,UID:78ee597e-16c1-4a1c-98f2-c73004704dfa (23-Feb-2021 20:05:09.088) (total time: 95ms):
    Trace[240293913]: ---"Request completed" 95ms (20:05:00.183)
    Trace[240293913]: [95.411733ms] [95.411733ms] END
    I0223 20:05:09.186208      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    I0223 20:05:09.190562      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    I0223 20:05:09.197224      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    I0223 20:05:12.024965      17 aggregator.go:234] Finished OpenAPI spec generation after 4.333614994s
    I0223 20:05:12.165488      17 aggregator.go:231] Updating OpenAPI spec because v1.oauth.openshift.io is updated
    I0223 20:05:12.669399      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:05:12.669450      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:05:12.699059      17 store.go:1376] Monitoring inmemorychannels.messaging.knative.dev count at <storage-prefix>//messaging.knative.dev/inmemorychannels
    I0223 20:05:12.700787      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:05:12.700838      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:05:12.725703      17 store.go:1376] Monitoring inmemorychannels.messaging.knative.dev count at <storage-prefix>//messaging.knative.dev/inmemorychannels
    I0223 20:05:12.740379      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    I0223 20:05:12.762181      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    I0223 20:05:16.195148      17 aggregator.go:234] Finished OpenAPI spec generation after 4.029613456s
    E0223 20:05:16.215542      17 controller.go:116] loading OpenAPI spec for "v1.admission.work.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:05:16.215571      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.work.open-cluster-management.io: Rate Limited Requeue.
    I0223 20:05:16.557343      17 aggregator.go:231] Updating OpenAPI spec because v1.template.openshift.io is updated
    I0223 20:05:20.679964      17 aggregator.go:234] Finished OpenAPI spec generation after 4.12256576s
    I0223 20:05:21.031610      17 aggregator.go:231] Updating OpenAPI spec because v1.security.openshift.io is updated
    I0223 20:05:25.503710      17 aggregator.go:234] Finished OpenAPI spec generation after 4.472044819s
    I0223 20:05:25.572676      17 aggregator.go:231] Updating OpenAPI spec because v1beta1.proxy.open-cluster-management.io is updated
    I0223 20:05:29.829929      17 aggregator.go:234] Finished OpenAPI spec generation after 4.257194009s
    E0223 20:05:29.846154      17 controller.go:116] loading OpenAPI spec for "v1beta1.webhook.certmanager.k8s.io" failed with: OpenAPI spec does not exist
    I0223 20:05:29.846186      17 controller.go:129] OpenAPI AggregationController: action for item v1beta1.webhook.certmanager.k8s.io: Rate Limited Requeue.
    I0223 20:05:30.225057      17 aggregator.go:231] Updating OpenAPI spec because v1.build.openshift.io is updated
    I0223 20:05:30.934679      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:05:30.934734      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:05:30.934750      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:05:30.935192      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc013fb7ed0, {CONNECTING <nil>}
    I0223 20:05:30.946085      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc013fb7ed0, {READY <nil>}
    I0223 20:05:30.947319      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:05:34.429421      17 aggregator.go:234] Finished OpenAPI spec generation after 4.204325797s
    I0223 20:05:34.799391      17 aggregator.go:231] Updating OpenAPI spec because v1.authorization.openshift.io is updated
    I0223 20:05:36.065011      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:05:36.065070      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:05:36.080821      17 store.go:1376] Monitoring helmchartrepositories.helm.openshift.io count at <storage-prefix>//helm.openshift.io/helmchartrepositories
    I0223 20:05:36.091495      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    I0223 20:05:36.487193      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:05:36.487271      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:05:36.487287      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:05:36.487479      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc03f0eb5a0, {CONNECTING <nil>}
    I0223 20:05:36.500723      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc03f0eb5a0, {READY <nil>}
    I0223 20:05:36.501622      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:05:39.256269      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:05:39.256328      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:05:39.256343      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:05:39.256661      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0216ae7b0, {CONNECTING <nil>}
    I0223 20:05:39.274222      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0216ae7b0, {READY <nil>}
    I0223 20:05:39.275887      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:05:39.284117      17 aggregator.go:234] Finished OpenAPI spec generation after 4.48468852s
    I0223 20:05:39.436520      17 aggregator.go:231] Updating OpenAPI spec because v1.user.openshift.io is updated
    I0223 20:05:40.178850      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:05:40.178954      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:05:40.178976      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:05:40.179262      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc033638780, {CONNECTING <nil>}
    I0223 20:05:40.201690      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc033638780, {READY <nil>}
    I0223 20:05:40.203486      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:05:43.618131      17 aggregator.go:234] Finished OpenAPI spec generation after 4.181574968s
    I0223 20:05:44.063046      17 aggregator.go:231] Updating OpenAPI spec because v1.image.openshift.io is updated
    I0223 20:05:48.196309      17 aggregator.go:234] Finished OpenAPI spec generation after 4.133219904s
    E0223 20:05:48.204176      17 controller.go:116] loading OpenAPI spec for "v1.admission.hive.openshift.io" failed with: OpenAPI spec does not exist
    I0223 20:05:48.204202      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.hive.openshift.io: Rate Limited Requeue.
    I0223 20:05:48.549113      17 aggregator.go:231] Updating OpenAPI spec because v1.project.openshift.io is updated
    I0223 20:05:52.746015      17 aggregator.go:234] Finished OpenAPI spec generation after 4.196864589s
    I0223 20:05:53.112430      17 aggregator.go:231] Updating OpenAPI spec because v1.apps.openshift.io is updated
    I0223 20:05:56.971078      17 aggregator.go:234] Finished OpenAPI spec generation after 3.85861033s
    E0223 20:05:56.980145      17 controller.go:116] loading OpenAPI spec for "v1.admission.cluster.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:05:56.980171      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.cluster.open-cluster-management.io: Rate Limited Requeue.
    I0223 20:06:03.860352      17 cacher.go:782] cacher (*rbac.ClusterRole): 1 objects queued in incoming channel.
    I0223 20:06:03.860384      17 cacher.go:782] cacher (*rbac.ClusterRole): 2 objects queued in incoming channel.
    I0223 20:06:09.726852      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:06:09.726927      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:06:09.726944      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:06:09.727181      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc06e54cb00, {CONNECTING <nil>}
    I0223 20:06:09.738795      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc06e54cb00, {READY <nil>}
    I0223 20:06:09.739840      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:06:10.804974      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:06:10.805043      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:06:10.805062      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:06:10.805355      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc06e747770, {CONNECTING <nil>}
    I0223 20:06:10.814642      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc06e747770, {READY <nil>}
    I0223 20:06:10.815495      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:06:11.864287      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:06:11.864428      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:06:11.880389      17 store.go:1376] Monitoring consolequickstarts.console.openshift.io count at <storage-prefix>//console.openshift.io/consolequickstarts
    I0223 20:06:11.906613      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    I0223 20:06:13.250322      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:06:13.250373      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:06:13.262132      17 store.go:1376] Monitoring consolenotifications.console.openshift.io count at <storage-prefix>//console.openshift.io/consolenotifications
    I0223 20:06:13.267480      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    E0223 20:06:16.405081      17 controller.go:116] loading OpenAPI spec for "v1.admission.work.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:06:16.405112      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.work.open-cluster-management.io: Rate Limited Requeue.
    I0223 20:06:17.152060      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:06:17.152125      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:06:17.152137      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:06:17.152217      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc023718290, {CONNECTING <nil>}
    I0223 20:06:17.166695      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc023718290, {READY <nil>}
    I0223 20:06:17.168117      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:06:17.755826      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:06:17.755873      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:06:17.755890      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:06:17.756010      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc016ef5a50, {CONNECTING <nil>}
    I0223 20:06:17.768225      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc016ef5a50, {READY <nil>}
    I0223 20:06:17.769922      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:06:23.353985      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:06:23.354028      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:06:23.369110      17 store.go:1376] Monitoring infrastructures.config.openshift.io count at <storage-prefix>//config.openshift.io/infrastructures
    I0223 20:06:23.376250      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    I0223 20:06:23.663927      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:06:23.663970      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:06:23.679810      17 store.go:1376] Monitoring clusterautoscalers.autoscaling.openshift.io count at <storage-prefix>//autoscaling.openshift.io/clusterautoscalers
    I0223 20:06:23.682902      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    I0223 20:06:25.060090      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:06:25.060150      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:06:25.076042      17 store.go:1376] Monitoring proxies.config.openshift.io count at <storage-prefix>//config.openshift.io/proxies
    I0223 20:06:25.084586      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    I0223 20:06:25.150789      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:06:25.151032      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:06:25.167870      17 store.go:1376] Monitoring ingresses.config.openshift.io count at <storage-prefix>//config.openshift.io/ingresses
    I0223 20:06:25.175988      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    I0223 20:06:25.197194      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:06:25.197244      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:06:25.213266      17 store.go:1376] Monitoring networks.config.openshift.io count at <storage-prefix>//config.openshift.io/networks
    I0223 20:06:25.218690      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    I0223 20:06:25.244949      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:06:25.245005      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:06:25.255412      17 store.go:1376] Monitoring apiservers.config.openshift.io count at <storage-prefix>//config.openshift.io/apiservers
    I0223 20:06:25.267658      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    I0223 20:06:25.286223      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:06:25.286260      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:06:25.298314      17 store.go:1376] Monitoring consoles.config.openshift.io count at <storage-prefix>//config.openshift.io/consoles
    I0223 20:06:25.308087      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    I0223 20:06:25.329369      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:06:25.329409      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:06:25.341317      17 store.go:1376] Monitoring projects.config.openshift.io count at <storage-prefix>//config.openshift.io/projects
    I0223 20:06:25.344898      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    E0223 20:06:25.372533      17 customresource_handler.go:669] error building openapi models for builds.config.openshift.io: ERROR $root.definitions.io.openshift.config.v1.Build.properties.spec.properties.buildDefaults.properties.env.items.<array>.properties.valueFrom.properties.resourceFieldRef.properties.divisor has invalid property: anyOf
    ERROR $root.definitions.io.openshift.config.v1.Build.properties.spec.properties.buildDefaults.properties.resources.properties.limits.additionalProperties.schema has invalid property: anyOf
    ERROR $root.definitions.io.openshift.config.v1.Build.properties.spec.properties.buildDefaults.properties.resources.properties.requests.additionalProperties.schema has invalid property: anyOf
    I0223 20:06:25.373322      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:06:25.373372      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:06:25.384166      17 store.go:1376] Monitoring builds.config.openshift.io count at <storage-prefix>//config.openshift.io/builds
    I0223 20:06:25.400470      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    I0223 20:06:25.413993      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:06:25.414039      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:06:25.424360      17 store.go:1376] Monitoring authentications.config.openshift.io count at <storage-prefix>//config.openshift.io/authentications
    I0223 20:06:25.438616      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    I0223 20:06:25.454760      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:06:25.454809      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:06:25.464403      17 store.go:1376] Monitoring dnses.config.openshift.io count at <storage-prefix>//config.openshift.io/dnses
    I0223 20:06:25.470023      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    I0223 20:06:25.821845      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:06:25.821889      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:06:25.834724      17 store.go:1376] Monitoring images.config.openshift.io count at <storage-prefix>//config.openshift.io/images
    I0223 20:06:25.839432      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    I0223 20:06:26.459176      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:06:26.459224      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:06:26.471847      17 store.go:1376] Monitoring schedulers.config.openshift.io count at <storage-prefix>//config.openshift.io/schedulers
    I0223 20:06:26.478613      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    I0223 20:06:26.499374      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:06:26.499423      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:06:26.511287      17 store.go:1376] Monitoring featuregates.config.openshift.io count at <storage-prefix>//config.openshift.io/featuregates
    I0223 20:06:26.516264      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    I0223 20:06:26.594788      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:06:26.594838      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:06:26.612875      17 store.go:1376] Monitoring oauths.config.openshift.io count at <storage-prefix>//config.openshift.io/oauths
    I0223 20:06:26.618762      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    I0223 20:06:26.727218      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:06:26.727279      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:06:26.739099      17 store.go:1376] Monitoring operatorhubs.config.openshift.io count at <storage-prefix>//config.openshift.io/operatorhubs
    I0223 20:06:26.752852      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    E0223 20:06:29.851397      17 controller.go:116] loading OpenAPI spec for "v1beta1.webhook.certmanager.k8s.io" failed with: OpenAPI spec does not exist
    I0223 20:06:29.851427      17 controller.go:129] OpenAPI AggregationController: action for item v1beta1.webhook.certmanager.k8s.io: Rate Limited Requeue.
    I0223 20:06:45.041060      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:06:45.041107      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:06:45.041118      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:06:45.041197      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02d1d1e60, {CONNECTING <nil>}
    I0223 20:06:45.051658      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02d1d1e60, {READY <nil>}
    I0223 20:06:45.052613      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 20:06:48.211149      17 controller.go:116] loading OpenAPI spec for "v1.admission.hive.openshift.io" failed with: OpenAPI spec does not exist
    I0223 20:06:48.211183      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.hive.openshift.io: Rate Limited Requeue.
    I0223 20:06:50.035609      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:06:50.035656      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:06:50.035668      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:06:50.035934      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0205140e0, {CONNECTING <nil>}
    I0223 20:06:50.048163      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0205140e0, {READY <nil>}
    I0223 20:06:50.049972      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:06:50.865458      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:06:50.865503      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:06:50.865513      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:06:50.865812      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc023624b90, {CONNECTING <nil>}
    I0223 20:06:50.875200      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc023624b90, {READY <nil>}
    I0223 20:06:50.876133      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:06:53.144098      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:06:53.144157      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:06:53.144176      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:06:53.144256      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0218bb950, {CONNECTING <nil>}
    I0223 20:06:53.156400      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0218bb950, {READY <nil>}
    I0223 20:06:53.157754      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 20:06:56.990758      17 controller.go:116] loading OpenAPI spec for "v1.admission.cluster.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:06:56.990789      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.cluster.open-cluster-management.io: Rate Limited Requeue.
    E0223 20:07:13.580509      17 customresource_handler.go:669] error building openapi models for storageclusters.ocs.openshift.io: ERROR $root.definitions.io.openshift.ocs.v1.StorageCluster.properties.spec.properties.monPVCTemplate.properties.spec.properties.resources.properties.limits.additionalProperties.schema has invalid property: anyOf
    ERROR $root.definitions.io.openshift.ocs.v1.StorageCluster.properties.spec.properties.monPVCTemplate.properties.spec.properties.resources.properties.requests.additionalProperties.schema has invalid property: anyOf
    ERROR $root.definitions.io.openshift.ocs.v1.StorageCluster.properties.spec.properties.monPVCTemplate.properties.status.properties.capacity.additionalProperties.schema has invalid property: anyOf
    ERROR $root.definitions.io.openshift.ocs.v1.StorageCluster.properties.spec.properties.multiCloudGateway.properties.endpoints.properties.resources.properties.limits.additionalProperties.schema has invalid property: anyOf
    ERROR $root.definitions.io.openshift.ocs.v1.StorageCluster.properties.spec.properties.multiCloudGateway.properties.endpoints.properties.resources.properties.requests.additionalProperties.schema has invalid property: anyOf
    ERROR $root.definitions.io.openshift.ocs.v1.StorageCluster.properties.spec.properties.resources.additionalProperties.schema.properties.limits.additionalProperties.schema has invalid property: anyOf
    ERROR $root.definitions.io.openshift.ocs.v1.StorageCluster.properties.spec.properties.resources.additionalProperties.schema.properties.requests.additionalProperties.schema has invalid property: anyOf
    ERROR $root.definitions.io.openshift.ocs.v1.StorageCluster.properties.spec.properties.storageDeviceSets.items.<array>.properties.dataPVCTemplate.properties.spec.properties.resources.properties.limits.additionalProperties.schema has invalid property: anyOf
    ERROR $root.definitions.io.openshift.ocs.v1.StorageCluster.properties.spec.properties.storageDeviceSets.items.<array>.properties.dataPVCTemplate.properties.spec.properties.resources.properties.requests.additionalProperties.schema has invalid property: anyOf
    ERROR $root.definitions.io.openshift.ocs.v1.StorageCluster.properties.spec.properties.storageDeviceSets.items.<array>.properties.dataPVCTemplate.properties.status.properties.capacity.additionalProperties.schema has invalid property: anyOf
    ERROR $root.definitions.io.openshift.ocs.v1.StorageCluster.properties.spec.properties.storageDeviceSets.items.<array>.properties.metadataPVCTemplate.properties.spec.properties.resources.properties.limits.additionalProperties.schema has invalid property: anyOf
    ERROR $root.definitions.io.openshift.ocs.v1.StorageCluster.properties.spec.properties.storageDeviceSets.items.<array>.properties.metadataPVCTemplate.properties.spec.properties.resources.properties.requests.additionalProperties.schema has invalid property: anyOf
    ERROR $root.definitions.io.openshift.ocs.v1.StorageCluster.properties.spec.properties.storageDeviceSets.items.<array>.properties.metadataPVCTemplate.properties.status.properties.capacity.additionalProperties.schema has invalid property: anyOf
    ERROR $root.definitions.io.openshift.ocs.v1.StorageCluster.properties.spec.properties.storageDeviceSets.items.<array>.properties.resources.properties.limits.additionalProperties.schema has invalid property: anyOf
    ERROR $root.definitions.io.openshift.ocs.v1.StorageCluster.properties.spec.properties.storageDeviceSets.items.<array>.properties.resources.properties.requests.additionalProperties.schema has invalid property: anyOf
    I0223 20:07:13.583161      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:07:13.583207      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:07:13.597257      17 store.go:1376] Monitoring storageclusters.ocs.openshift.io count at <storage-prefix>//ocs.openshift.io/storageclusters
    I0223 20:07:13.608204      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    I0223 20:07:13.636173      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:07:13.636213      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:07:13.648311      17 store.go:1376] Monitoring provisionings.metal3.io count at <storage-prefix>//metal3.io/provisionings
    I0223 20:07:13.651710      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    I0223 20:07:13.680333      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:07:13.680384      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:07:13.693416      17 store.go:1376] Monitoring consolelinks.console.openshift.io count at <storage-prefix>//console.openshift.io/consolelinks
    I0223 20:07:13.701077      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    I0223 20:07:15.119466      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:07:15.119523      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:07:15.119538      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:07:15.119773      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02f178260, {CONNECTING <nil>}
    I0223 20:07:15.128680      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02f178260, {READY <nil>}
    I0223 20:07:15.129517      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:07:21.323679      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:07:21.323785      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:07:21.323804      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:07:21.324078      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01cba8870, {CONNECTING <nil>}
    I0223 20:07:21.338013      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01cba8870, {READY <nil>}
    I0223 20:07:21.339609      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:07:30.657586      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:07:30.657645      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:07:30.657663      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:07:30.657770      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc017011760, {CONNECTING <nil>}
    I0223 20:07:30.667893      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc017011760, {READY <nil>}
    I0223 20:07:30.668718      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:07:31.994177      17 dynamic_serving_content.go:111] Loaded a new cert/key pair for "aggregator-proxy-cert::/etc/kubernetes/static-pod-certs/secrets/aggregator-client/tls.crt::/etc/kubernetes/static-pod-certs/secrets/aggregator-client/tls.key"
    E0223 20:07:33.005735      17 controller.go:116] loading OpenAPI spec for "v1.admission.hive.openshift.io" failed with: OpenAPI spec does not exist
    I0223 20:07:33.005763      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.hive.openshift.io: Rate Limited Requeue.
    E0223 20:07:33.020630      17 controller.go:116] loading OpenAPI spec for "v1.admission.cluster.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:07:33.020662      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.cluster.open-cluster-management.io: Rate Limited Requeue.
    E0223 20:07:33.034550      17 controller.go:116] loading OpenAPI spec for "v1.admission.work.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:07:33.034577      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.work.open-cluster-management.io: Rate Limited Requeue.
    E0223 20:07:33.049431      17 controller.go:116] loading OpenAPI spec for "v1beta1.webhook.certmanager.k8s.io" failed with: OpenAPI spec does not exist
    I0223 20:07:33.049456      17 controller.go:129] OpenAPI AggregationController: action for item v1beta1.webhook.certmanager.k8s.io: Rate Limited Requeue.
    I0223 20:07:36.391356      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:07:36.391405      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:07:36.391421      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:07:36.391650      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc058830f60, {CONNECTING <nil>}
    I0223 20:07:36.403907      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc058830f60, {READY <nil>}
    I0223 20:07:36.405512      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:07:45.357701      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:07:45.357760      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:07:45.357778      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:07:45.357976      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01f70e580, {CONNECTING <nil>}
    I0223 20:07:45.366979      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01f70e580, {READY <nil>}
    I0223 20:07:45.367881      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:07:56.812383      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:07:56.812435      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:07:56.823839      17 store.go:1376] Monitoring consoles.operator.openshift.io count at <storage-prefix>//operator.openshift.io/consoles
    I0223 20:07:56.834377      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    I0223 20:08:03.324327      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:08:03.324406      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:08:03.324421      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:08:03.324534      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc025ad4bb0, {CONNECTING <nil>}
    I0223 20:08:03.337114      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc025ad4bb0, {READY <nil>}
    I0223 20:08:03.338922      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:08:05.528702      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:08:05.528847      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:08:05.528875      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:08:05.529143      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc026d35c70, {CONNECTING <nil>}
    I0223 20:08:05.538697      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc026d35c70, {READY <nil>}
    I0223 20:08:05.539729      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:08:17.801198      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:08:17.801256      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:08:17.801268      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:08:17.801496      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc023de1ce0, {CONNECTING <nil>}
    I0223 20:08:17.816322      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc023de1ce0, {READY <nil>}
    I0223 20:08:17.817782      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:08:19.855773      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:08:19.855831      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:08:19.855846      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:08:19.856091      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01c32a220, {CONNECTING <nil>}
    I0223 20:08:19.865397      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01c32a220, {READY <nil>}
    I0223 20:08:19.866622      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 20:08:33.019207      17 controller.go:116] loading OpenAPI spec for "v1.admission.hive.openshift.io" failed with: OpenAPI spec does not exist
    I0223 20:08:33.019239      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.hive.openshift.io: Rate Limited Requeue.
    E0223 20:08:33.027834      17 controller.go:116] loading OpenAPI spec for "v1.admission.cluster.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:08:33.027860      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.cluster.open-cluster-management.io: Rate Limited Requeue.
    E0223 20:08:33.048271      17 controller.go:116] loading OpenAPI spec for "v1.admission.work.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:08:33.048295      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.work.open-cluster-management.io: Rate Limited Requeue.
    E0223 20:08:33.051060      17 controller.go:116] loading OpenAPI spec for "v1beta1.webhook.certmanager.k8s.io" failed with: OpenAPI spec does not exist
    I0223 20:08:33.051088      17 controller.go:129] OpenAPI AggregationController: action for item v1beta1.webhook.certmanager.k8s.io: Rate Limited Requeue.
    I0223 20:08:35.650018      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:08:35.650080      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:08:35.650113      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:08:35.650433      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02bcab4d0, {CONNECTING <nil>}
    I0223 20:08:35.663989      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02bcab4d0, {READY <nil>}
    I0223 20:08:35.665176      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:08:37.563631      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:08:37.563766      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:08:37.563812      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:08:37.564033      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0169d72d0, {CONNECTING <nil>}
    I0223 20:08:37.577815      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0169d72d0, {READY <nil>}
    I0223 20:08:37.579322      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:08:41.300153      17 controller.go:606] quota admission added evaluator for: deployments.apps
    I0223 20:08:41.300220      17 controller.go:606] quota admission added evaluator for: deployments.apps
    I0223 20:08:45.570439      17 controller.go:606] quota admission added evaluator for: rolebindings.rbac.authorization.k8s.io
    I0223 20:08:45.570524      17 controller.go:606] quota admission added evaluator for: rolebindings.rbac.authorization.k8s.io
    I0223 20:08:51.252876      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:08:51.252931      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:08:51.252948      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:08:51.253421      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0218baa20, {CONNECTING <nil>}
    I0223 20:08:51.266626      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0218baa20, {READY <nil>}
    I0223 20:08:51.267747      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:08:52.456717      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:08:52.456760      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:08:52.456775      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:08:52.456871      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02b39a730, {CONNECTING <nil>}
    I0223 20:08:52.468584      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02b39a730, {READY <nil>}
    I0223 20:08:52.469975      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:08:53.443295      17 trace.go:205] Trace[944432383]: "List" url:/apis/console.openshift.io/v1/consolequickstarts,user-agent:Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36 Edg/88.0.705.74,client:::1 (23-Feb-2021 20:08:52.009) (total time: 1433ms):
    Trace[944432383]: ---"Writing http response done" count:11 1423ms (20:08:00.443)
    Trace[944432383]: [1.433995653s] [1.433995653s] END
    I0223 20:09:08.990705      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:09:08.990764      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:09:08.990783      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:09:08.991017      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc016f50240, {CONNECTING <nil>}
    I0223 20:09:09.001875      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc016f50240, {READY <nil>}
    I0223 20:09:09.003444      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:09:10.544180      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:09:10.544281      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:09:10.544302      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:09:10.544442      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02f0ba160, {CONNECTING <nil>}
    I0223 20:09:10.554289      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02f0ba160, {READY <nil>}
    I0223 20:09:10.555643      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:09:21.707317      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:09:21.707393      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:09:21.707410      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:09:21.707653      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc016448a40, {CONNECTING <nil>}
    I0223 20:09:21.716168      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc016448a40, {READY <nil>}
    I0223 20:09:21.717079      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:09:33.054039      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:09:33.054113      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:09:33.054132      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:09:33.054460      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01a8ea5f0, {CONNECTING <nil>}
    I0223 20:09:33.070404      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01a8ea5f0, {READY <nil>}
    I0223 20:09:33.072310      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 20:09:33.096295      17 controller.go:116] loading OpenAPI spec for "v1.admission.work.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:09:33.096393      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.work.open-cluster-management.io: Rate Limited Requeue.
    E0223 20:09:33.124679      17 controller.go:116] loading OpenAPI spec for "v1beta1.webhook.certmanager.k8s.io" failed with: OpenAPI spec does not exist
    I0223 20:09:33.124706      17 controller.go:129] OpenAPI AggregationController: action for item v1beta1.webhook.certmanager.k8s.io: Rate Limited Requeue.
    E0223 20:09:33.147802      17 controller.go:116] loading OpenAPI spec for "v1.admission.hive.openshift.io" failed with: OpenAPI spec does not exist
    I0223 20:09:33.147896      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.hive.openshift.io: Rate Limited Requeue.
    E0223 20:09:33.165237      17 controller.go:116] loading OpenAPI spec for "v1.admission.cluster.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:09:33.165335      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.cluster.open-cluster-management.io: Rate Limited Requeue.
    I0223 20:09:42.572742      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:09:42.572787      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:09:42.572798      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:09:42.572897      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0163afc10, {CONNECTING <nil>}
    I0223 20:09:42.582227      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0163afc10, {READY <nil>}
    I0223 20:09:42.583187      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:09:52.357329      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:09:52.357376      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:09:52.357387      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:09:52.357481      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc029d8b680, {CONNECTING <nil>}
    I0223 20:09:52.366646      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc029d8b680, {READY <nil>}
    I0223 20:09:52.367950      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:09:52.525620      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:09:52.525677      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:09:52.525695      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:09:52.525903      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc029e19090, {CONNECTING <nil>}
    I0223 20:09:52.538015      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc029e19090, {READY <nil>}
    I0223 20:09:52.539458      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:10:15.014856      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:10:15.014900      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:10:15.014933      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:10:15.015084      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02fbf1250, {CONNECTING <nil>}
    I0223 20:10:15.027851      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02fbf1250, {READY <nil>}
    I0223 20:10:15.029309      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:10:17.936414      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:10:17.936471      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:10:17.936485      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:10:17.936618      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc03003ec70, {CONNECTING <nil>}
    I0223 20:10:17.945721      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc03003ec70, {READY <nil>}
    I0223 20:10:17.947739      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:10:31.808885      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:10:31.808962      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:10:31.808978      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:10:31.809279      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc034cf9890, {CONNECTING <nil>}
    I0223 20:10:31.821545      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc034cf9890, {READY <nil>}
    I0223 20:10:31.822628      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 20:10:33.103784      17 controller.go:116] loading OpenAPI spec for "v1.admission.work.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:10:33.103817      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.work.open-cluster-management.io: Rate Limited Requeue.
    E0223 20:10:33.138638      17 controller.go:116] loading OpenAPI spec for "v1beta1.webhook.certmanager.k8s.io" failed with: OpenAPI spec does not exist
    I0223 20:10:33.138670      17 controller.go:129] OpenAPI AggregationController: action for item v1beta1.webhook.certmanager.k8s.io: Rate Limited Requeue.
    E0223 20:10:33.153111      17 controller.go:116] loading OpenAPI spec for "v1.admission.hive.openshift.io" failed with: OpenAPI spec does not exist
    I0223 20:10:33.153142      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.hive.openshift.io: Rate Limited Requeue.
    E0223 20:10:33.166833      17 controller.go:116] loading OpenAPI spec for "v1.admission.cluster.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:10:33.166862      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.cluster.open-cluster-management.io: Rate Limited Requeue.
    I0223 20:10:33.929005      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:10:33.929051      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:10:33.929062      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:10:33.929134      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc035129230, {CONNECTING <nil>}
    I0223 20:10:33.940443      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc035129230, {READY <nil>}
    I0223 20:10:33.942289      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:10:49.005611      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:10:49.005665      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:10:49.005684      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:10:49.005966      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01504ee40, {CONNECTING <nil>}
    I0223 20:10:49.019331      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01504ee40, {READY <nil>}
    I0223 20:10:49.020609      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:10:55.772572      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:10:55.772615      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:10:55.772629      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:10:55.772836      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc009036e90, {CONNECTING <nil>}
    I0223 20:10:55.782151      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc009036e90, {READY <nil>}
    I0223 20:10:55.783073      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:11:06.107845      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:11:06.107941      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:11:06.107965      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:11:06.108075      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc011196ca0, {CONNECTING <nil>}
    I0223 20:11:06.124557      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc011196ca0, {READY <nil>}
    I0223 20:11:06.125630      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:11:06.688503      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:11:06.688598      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:11:06.688615      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:11:06.689031      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01180e410, {CONNECTING <nil>}
    I0223 20:11:06.709294      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01180e410, {READY <nil>}
    I0223 20:11:06.711524      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 20:11:08.960059      17 writers.go:107] apiserver was unable to write a JSON response: http: Handler timeout
    E0223 20:11:08.960144      17 status.go:71] apiserver received an error that is not an metav1.Status: &errors.errorString{s:"http: Handler timeout"}
    E0223 20:11:08.961124      17 writers.go:120] apiserver was unable to write a fallback JSON response: http: Handler timeout
    I0223 20:11:25.859261      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:11:25.859303      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:11:25.859319      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:11:25.859420      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc045e28ee0, {CONNECTING <nil>}
    I0223 20:11:25.872253      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc045e28ee0, {READY <nil>}
    I0223 20:11:25.874494      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:11:30.207131      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:11:30.207204      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:11:30.207218      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:11:30.207421      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01dc0cb20, {CONNECTING <nil>}
    I0223 20:11:30.217720      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01dc0cb20, {READY <nil>}
    I0223 20:11:30.218600      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:11:46.261894      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:11:46.261995      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:11:46.262014      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:11:46.262176      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0434195b0, {CONNECTING <nil>}
    I0223 20:11:46.275517      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0434195b0, {READY <nil>}
    I0223 20:11:46.277446      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:11:49.094371      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:11:49.094420      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:11:49.094433      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:11:49.094508      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02ab3cf90, {CONNECTING <nil>}
    I0223 20:11:49.104664      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02ab3cf90, {READY <nil>}
    I0223 20:11:49.105475      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 20:11:56.801165      17 status.go:71] apiserver received an error that is not an metav1.Status: &errors.errorString{s:"context canceled"}
    E0223 20:11:56.801304      17 writers.go:107] apiserver was unable to write a JSON response: http: Handler timeout
    E0223 20:11:56.802531      17 status.go:71] apiserver received an error that is not an metav1.Status: &errors.errorString{s:"http: Handler timeout"}
    E0223 20:11:56.803619      17 writers.go:120] apiserver was unable to write a fallback JSON response: http: Handler timeout
    I0223 20:12:01.208268      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:12:01.208322      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:12:01.208338      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:12:01.208683      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0287cef40, {CONNECTING <nil>}
    I0223 20:12:01.222862      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0287cef40, {READY <nil>}
    I0223 20:12:01.224436      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:12:03.185258      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:12:03.185303      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:12:03.185314      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:12:03.185572      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02ae45c50, {CONNECTING <nil>}
    I0223 20:12:03.195074      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02ae45c50, {READY <nil>}
    I0223 20:12:03.195891      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:12:16.592136      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:12:16.592187      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:12:16.592202      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:12:16.592456      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0243217f0, {CONNECTING <nil>}
    I0223 20:12:16.604563      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0243217f0, {READY <nil>}
    I0223 20:12:16.606111      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:12:29.873342      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:12:29.873393      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:12:29.873410      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:12:29.873575      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc00d056e80, {CONNECTING <nil>}
    I0223 20:12:29.885234      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc00d056e80, {READY <nil>}
    I0223 20:12:29.886196      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 20:12:33.114362      17 controller.go:116] loading OpenAPI spec for "v1.admission.work.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:12:33.114388      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.work.open-cluster-management.io: Rate Limited Requeue.
    E0223 20:12:33.140452      17 controller.go:116] loading OpenAPI spec for "v1beta1.webhook.certmanager.k8s.io" failed with: OpenAPI spec does not exist
    I0223 20:12:33.140486      17 controller.go:129] OpenAPI AggregationController: action for item v1beta1.webhook.certmanager.k8s.io: Rate Limited Requeue.
    E0223 20:12:33.163553      17 controller.go:116] loading OpenAPI spec for "v1.admission.hive.openshift.io" failed with: OpenAPI spec does not exist
    I0223 20:12:33.163585      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.hive.openshift.io: Rate Limited Requeue.
    E0223 20:12:33.173268      17 controller.go:116] loading OpenAPI spec for "v1.admission.cluster.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:12:33.173292      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.cluster.open-cluster-management.io: Rate Limited Requeue.
    I0223 20:12:39.796387      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:12:39.796454      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:12:39.796471      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:12:39.796874      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0125c8290, {CONNECTING <nil>}
    I0223 20:12:39.809814      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0125c8290, {READY <nil>}
    I0223 20:12:39.812054      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:12:46.219241      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:12:46.219315      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:12:46.219335      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:12:46.219717      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0133b1830, {CONNECTING <nil>}
    I0223 20:12:46.230203      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0133b1830, {READY <nil>}
    I0223 20:12:46.231106      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:12:53.478260      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:12:53.478320      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:12:53.478339      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:12:53.478610      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01469ea90, {CONNECTING <nil>}
    I0223 20:12:53.492487      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01469ea90, {READY <nil>}
    I0223 20:12:53.494097      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:13:09.919257      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:13:09.919313      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:13:09.919331      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:13:09.919619      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc022779b30, {CONNECTING <nil>}
    I0223 20:13:09.929152      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc022779b30, {READY <nil>}
    I0223 20:13:09.929892      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:13:17.254820      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:13:17.254990      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:13:17.255021      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:13:17.255283      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01e180180, {CONNECTING <nil>}
    I0223 20:13:17.265182      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01e180180, {READY <nil>}
    I0223 20:13:17.265959      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:13:23.718206      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:13:23.718265      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:13:23.718301      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:13:23.718606      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc020398fa0, {CONNECTING <nil>}
    I0223 20:13:23.729848      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc020398fa0, {READY <nil>}
    I0223 20:13:23.731329      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:13:23.734998      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:13:23.735046      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:13:23.735061      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:13:23.735337      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01f5a63d0, {CONNECTING <nil>}
    I0223 20:13:23.747507      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01f5a63d0, {READY <nil>}
    I0223 20:13:23.748922      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:13:51.656873      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:13:51.657003      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:13:51.657029      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:13:51.658412      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02be84270, {CONNECTING <nil>}
    I0223 20:13:51.667966      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02be84270, {READY <nil>}
    I0223 20:13:51.669222      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:13:53.770053      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:13:53.770102      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:13:53.770119      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:13:53.770370      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02c90ad90, {CONNECTING <nil>}
    I0223 20:13:53.783998      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02c90ad90, {READY <nil>}
    I0223 20:13:53.787361      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:13:54.415807      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:13:54.415867      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:13:54.415884      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:13:54.416064      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02c6e7de0, {CONNECTING <nil>}
    I0223 20:13:54.425989      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02c6e7de0, {READY <nil>}
    I0223 20:13:54.427471      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:13:55.235540      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:13:55.235602      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:13:55.235619      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:13:55.235835      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02ca552e0, {CONNECTING <nil>}
    I0223 20:13:55.248477      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02ca552e0, {READY <nil>}
    I0223 20:13:55.249851      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:14:24.544617      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:14:24.544668      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:14:24.544686      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:14:24.544983      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc022f58a70, {CONNECTING <nil>}
    I0223 20:14:24.559831      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc022f58a70, {READY <nil>}
    I0223 20:14:24.561419      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:14:27.296543      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:14:27.296604      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:14:27.296615      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:14:27.296703      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01341a2e0, {CONNECTING <nil>}
    I0223 20:14:27.307691      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01341a2e0, {READY <nil>}
    I0223 20:14:27.308752      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:14:29.419263      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:14:29.419308      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:14:29.419319      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:14:29.419448      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01c7a3850, {CONNECTING <nil>}
    I0223 20:14:29.433189      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01c7a3850, {READY <nil>}
    I0223 20:14:29.434749      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:14:31.937260      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:14:31.937319      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:14:31.937336      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:14:31.937609      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc00a4c5dc0, {CONNECTING <nil>}
    I0223 20:14:31.950201      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc00a4c5dc0, {READY <nil>}
    I0223 20:14:31.951898      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 20:14:33.098899      17 controller.go:116] loading OpenAPI spec for "v1.admission.work.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:14:33.099004      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.work.open-cluster-management.io: Rate Limited Requeue.
    E0223 20:14:33.116301      17 controller.go:116] loading OpenAPI spec for "v1beta1.webhook.certmanager.k8s.io" failed with: OpenAPI spec does not exist
    I0223 20:14:33.116323      17 controller.go:129] OpenAPI AggregationController: action for item v1beta1.webhook.certmanager.k8s.io: Rate Limited Requeue.
    E0223 20:14:33.126876      17 controller.go:116] loading OpenAPI spec for "v1.admission.hive.openshift.io" failed with: OpenAPI spec does not exist
    I0223 20:14:33.129369      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.hive.openshift.io: Rate Limited Requeue.
    E0223 20:14:33.142136      17 controller.go:116] loading OpenAPI spec for "v1.admission.cluster.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:14:33.142194      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.cluster.open-cluster-management.io: Rate Limited Requeue.
    I0223 20:14:57.487353      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:14:57.487418      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:14:57.487435      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:14:57.487867      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01c564480, {CONNECTING <nil>}
    I0223 20:14:57.497307      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01c564480, {READY <nil>}
    I0223 20:14:57.498464      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:15:04.359470      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:15:04.359526      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:15:04.359577      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:15:04.359809      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02af5a800, {CONNECTING <nil>}
    I0223 20:15:04.371154      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02af5a800, {READY <nil>}
    I0223 20:15:04.374782      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:15:10.023837      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:15:10.023887      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:15:10.023902      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:15:10.024153      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc015b36240, {CONNECTING <nil>}
    I0223 20:15:10.034075      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc015b36240, {READY <nil>}
    I0223 20:15:10.035122      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:15:11.377296      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:15:11.377353      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:15:11.377371      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:15:11.377720      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc009b73090, {CONNECTING <nil>}
    I0223 20:15:11.393845      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc009b73090, {READY <nil>}
    I0223 20:15:11.395479      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:15:28.205460      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:15:28.205508      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:15:28.205526      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:15:28.205779      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc015e44080, {CONNECTING <nil>}
    I0223 20:15:28.215015      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc015e44080, {READY <nil>}
    I0223 20:15:28.216006      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 20:15:33.114113      17 controller.go:116] loading OpenAPI spec for "v1.admission.work.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:15:33.114139      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.work.open-cluster-management.io: Rate Limited Requeue.
    E0223 20:15:33.121389      17 controller.go:116] loading OpenAPI spec for "v1beta1.webhook.certmanager.k8s.io" failed with: OpenAPI spec does not exist
    I0223 20:15:33.121417      17 controller.go:129] OpenAPI AggregationController: action for item v1beta1.webhook.certmanager.k8s.io: Rate Limited Requeue.
    E0223 20:15:33.136619      17 controller.go:116] loading OpenAPI spec for "v1.admission.hive.openshift.io" failed with: OpenAPI spec does not exist
    I0223 20:15:33.136646      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.hive.openshift.io: Rate Limited Requeue.
    E0223 20:15:33.157182      17 controller.go:116] loading OpenAPI spec for "v1.admission.cluster.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:15:33.157208      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.cluster.open-cluster-management.io: Rate Limited Requeue.
    I0223 20:15:42.004286      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:15:42.004344      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:15:42.004362      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:15:42.004561      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc023f3e8f0, {CONNECTING <nil>}
    I0223 20:15:42.018226      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc023f3e8f0, {READY <nil>}
    I0223 20:15:42.019875      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:15:43.315937      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:15:43.315993      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:15:43.316011      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:15:43.316347      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc026a7b080, {CONNECTING <nil>}
    I0223 20:15:43.330823      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc026a7b080, {READY <nil>}
    I0223 20:15:43.332457      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:15:46.760062      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:15:46.760113      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:15:46.760129      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:15:46.760592      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc014158180, {CONNECTING <nil>}
    I0223 20:15:46.770807      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc014158180, {READY <nil>}
    I0223 20:15:46.772113      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:16:04.596613      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:16:04.596670      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:16:04.596704      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:16:04.597072      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc024838a00, {CONNECTING <nil>}
    I0223 20:16:04.611838      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc024838a00, {READY <nil>}
    I0223 20:16:04.614011      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:16:07.555621      17 cacher.go:782] cacher (*unstructured.Unstructured): 1 objects queued in incoming channel.
    I0223 20:16:07.555649      17 cacher.go:782] cacher (*unstructured.Unstructured): 2 objects queued in incoming channel.
    I0223 20:16:14.327452      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:16:14.327521      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:16:14.327540      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:16:14.327797      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02d5caad0, {CONNECTING <nil>}
    I0223 20:16:14.340700      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02d5caad0, {READY <nil>}
    I0223 20:16:14.342376      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:16:22.129883      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:16:22.129987      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:16:22.130005      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:16:22.130301      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02036ba40, {CONNECTING <nil>}
    I0223 20:16:22.147815      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02036ba40, {READY <nil>}
    I0223 20:16:22.152162      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:16:28.619718      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:16:28.619769      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:16:28.619786      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:16:28.620013      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc022431ec0, {CONNECTING <nil>}
    I0223 20:16:28.629594      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc022431ec0, {READY <nil>}
    I0223 20:16:28.631227      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:16:36.620413      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:16:36.620456      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:16:36.620467      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:16:36.620553      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02d90d550, {CONNECTING <nil>}
    I0223 20:16:36.631081      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02d90d550, {READY <nil>}
    I0223 20:16:36.632053      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:16:56.001485      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:16:56.001615      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:16:56.001634      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:16:56.001750      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0151277d0, {CONNECTING <nil>}
    I0223 20:16:56.014038      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0151277d0, {READY <nil>}
    I0223 20:16:56.015425      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:16:56.891314      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:16:56.891367      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:16:56.891384      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:16:56.891444      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0092c0130, {CONNECTING <nil>}
    I0223 20:16:56.908322      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0092c0130, {READY <nil>}
    I0223 20:16:56.909498      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:17:07.580839      17 cacher.go:782] cacher (*unstructured.Unstructured): 3 objects queued in incoming channel.
    I0223 20:17:07.580872      17 cacher.go:782] cacher (*unstructured.Unstructured): 4 objects queued in incoming channel.
    I0223 20:17:08.940785      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:17:08.940830      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:17:08.940844      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:17:08.941041      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc015a123b0, {CONNECTING <nil>}
    I0223 20:17:08.951605      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc015a123b0, {READY <nil>}
    I0223 20:17:08.953080      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:17:15.425168      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:17:15.425224      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:17:15.425242      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:17:15.425747      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0130b80c0, {CONNECTING <nil>}
    I0223 20:17:15.435226      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0130b80c0, {READY <nil>}
    I0223 20:17:15.436149      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:17:29.608892      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:17:29.609008      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:17:29.609033      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:17:29.609330      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01477c7b0, {CONNECTING <nil>}
    I0223 20:17:29.621542      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01477c7b0, {READY <nil>}
    I0223 20:17:29.623189      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 20:17:33.130539      17 controller.go:116] loading OpenAPI spec for "v1.admission.work.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:17:33.130577      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.work.open-cluster-management.io: Rate Limited Requeue.
    E0223 20:17:33.142899      17 controller.go:116] loading OpenAPI spec for "v1beta1.webhook.certmanager.k8s.io" failed with: OpenAPI spec does not exist
    I0223 20:17:33.142951      17 controller.go:129] OpenAPI AggregationController: action for item v1beta1.webhook.certmanager.k8s.io: Rate Limited Requeue.
    E0223 20:17:33.155160      17 controller.go:116] loading OpenAPI spec for "v1.admission.hive.openshift.io" failed with: OpenAPI spec does not exist
    I0223 20:17:33.155190      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.hive.openshift.io: Rate Limited Requeue.
    E0223 20:17:33.177825      17 controller.go:116] loading OpenAPI spec for "v1.admission.cluster.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:17:33.177856      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.cluster.open-cluster-management.io: Rate Limited Requeue.
    I0223 20:17:36.495116      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:17:36.495330      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:17:36.495450      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:17:36.495871      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01e87b240, {CONNECTING <nil>}
    I0223 20:17:36.518207      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01e87b240, {READY <nil>}
    I0223 20:17:36.519650      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:17:50.175850      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:17:50.175956      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:17:50.175973      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:17:50.176171      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02ab6e9b0, {CONNECTING <nil>}
    I0223 20:17:50.193341      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02ab6e9b0, {READY <nil>}
    I0223 20:17:50.194252      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:17:56.580848      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:17:56.580893      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:17:56.580945      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:17:56.581057      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02809b660, {CONNECTING <nil>}
    I0223 20:17:56.591267      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02809b660, {READY <nil>}
    I0223 20:17:56.592255      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 20:18:02.247595      17 writers.go:107] apiserver was unable to write a JSON response: http: Handler timeout
    E0223 20:18:02.247713      17 status.go:71] apiserver received an error that is not an metav1.Status: &errors.errorString{s:"http: Handler timeout"}
    E0223 20:18:02.249059      17 writers.go:120] apiserver was unable to write a fallback JSON response: http: Handler timeout
    I0223 20:18:05.366328      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:18:05.366394      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:18:05.366410      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:18:05.366667      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02b7d5db0, {CONNECTING <nil>}
    I0223 20:18:05.379129      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02b7d5db0, {READY <nil>}
    I0223 20:18:05.380706      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:18:18.782049      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:18:18.782091      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:18:18.782102      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:18:18.782213      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02c9bfec0, {CONNECTING <nil>}
    I0223 20:18:18.795395      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02c9bfec0, {READY <nil>}
    I0223 20:18:18.796759      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:18:26.998862      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:18:26.998957      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:18:26.998977      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:18:26.999448      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02d528730, {CONNECTING <nil>}
    I0223 20:18:27.009876      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02d528730, {READY <nil>}
    I0223 20:18:27.011254      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:18:40.488703      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:18:40.488749      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:18:40.488763      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:18:40.489184      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0227fc370, {CONNECTING <nil>}
    I0223 20:18:40.500126      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0227fc370, {READY <nil>}
    I0223 20:18:40.501399      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:18:41.778954      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:18:41.779034      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:18:41.779051      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:18:41.779369      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02b39bfb0, {CONNECTING <nil>}
    I0223 20:18:41.792471      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02b39bfb0, {READY <nil>}
    I0223 20:18:41.793857      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:19:01.170210      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:19:01.170264      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:19:01.170281      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:19:01.170490      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc012e3c480, {CONNECTING <nil>}
    I0223 20:19:01.184932      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc012e3c480, {READY <nil>}
    I0223 20:19:01.186368      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:19:07.175949      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:19:07.176120      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:19:07.176150      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:19:07.176264      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01e841280, {CONNECTING <nil>}
    I0223 20:19:07.201880      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01e841280, {READY <nil>}
    I0223 20:19:07.202874      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:19:12.110691      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:19:12.111012      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:19:12.111183      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:19:12.111739      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01f0cf7f0, {CONNECTING <nil>}
    I0223 20:19:12.126528      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01f0cf7f0, {READY <nil>}
    I0223 20:19:12.128887      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:19:24.245167      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:19:24.245222      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:19:24.245235      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:19:24.245321      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0286bdfc0, {CONNECTING <nil>}
    I0223 20:19:24.257304      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0286bdfc0, {READY <nil>}
    I0223 20:19:24.258917      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 20:19:33.121496      17 controller.go:116] loading OpenAPI spec for "v1.admission.work.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:19:33.121705      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.work.open-cluster-management.io: Rate Limited Requeue.
    E0223 20:19:33.137502      17 controller.go:116] loading OpenAPI spec for "v1beta1.webhook.certmanager.k8s.io" failed with: OpenAPI spec does not exist
    I0223 20:19:33.137541      17 controller.go:129] OpenAPI AggregationController: action for item v1beta1.webhook.certmanager.k8s.io: Rate Limited Requeue.
    E0223 20:19:33.164130      17 controller.go:116] loading OpenAPI spec for "v1.admission.hive.openshift.io" failed with: OpenAPI spec does not exist
    I0223 20:19:33.164246      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.hive.openshift.io: Rate Limited Requeue.
    E0223 20:19:33.182731      17 controller.go:116] loading OpenAPI spec for "v1.admission.cluster.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:19:33.182859      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.cluster.open-cluster-management.io: Rate Limited Requeue.
    I0223 20:19:38.073712      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:19:38.073802      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:19:38.073833      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:19:38.074220      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0354c4540, {CONNECTING <nil>}
    I0223 20:19:38.089533      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0354c4540, {READY <nil>}
    I0223 20:19:38.091040      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:19:43.505784      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:19:43.505847      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:19:43.505865      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:19:43.506402      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02dd6d4c0, {CONNECTING <nil>}
    I0223 20:19:43.518817      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02dd6d4c0, {READY <nil>}
    I0223 20:19:43.520386      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:19:44.796836      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:19:44.796896      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:19:44.796930      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:19:44.797405      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02e288780, {CONNECTING <nil>}
    I0223 20:19:44.807114      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02e288780, {READY <nil>}
    I0223 20:19:44.808080      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:19:54.275580      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:19:54.275639      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:19:54.275655      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:19:54.275885      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02025a0a0, {CONNECTING <nil>}
    I0223 20:19:54.287391      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02025a0a0, {READY <nil>}
    I0223 20:19:54.289012      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 20:20:00.562199      17 status.go:71] apiserver received an error that is not an metav1.Status: &errors.errorString{s:"context canceled"}
    E0223 20:20:00.562434      17 writers.go:107] apiserver was unable to write a JSON response: http: Handler timeout
    E0223 20:20:00.563552      17 status.go:71] apiserver received an error that is not an metav1.Status: &errors.errorString{s:"http: Handler timeout"}
    E0223 20:20:00.564708      17 writers.go:120] apiserver was unable to write a fallback JSON response: http: Handler timeout
    E0223 20:20:12.652236      17 status.go:71] apiserver received an error that is not an metav1.Status: &errors.errorString{s:"context canceled"}
    E0223 20:20:12.652298      17 writers.go:107] apiserver was unable to write a JSON response: http: Handler timeout
    E0223 20:20:12.653496      17 status.go:71] apiserver received an error that is not an metav1.Status: &errors.errorString{s:"http: Handler timeout"}
    E0223 20:20:12.654832      17 writers.go:120] apiserver was unable to write a fallback JSON response: http: Handler timeout
    I0223 20:20:13.001199      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:20:13.001244      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:20:13.001256      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:20:13.001494      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01c60fb70, {CONNECTING <nil>}
    I0223 20:20:13.013824      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01c60fb70, {READY <nil>}
    I0223 20:20:13.015165      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:20:28.038534      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:20:28.038579      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:20:28.038590      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:20:28.038880      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02990bba0, {CONNECTING <nil>}
    I0223 20:20:28.051316      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02990bba0, {READY <nil>}
    I0223 20:20:28.052458      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:20:29.392841      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:20:29.392886      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:20:29.392900      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:20:29.393075      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc029a15ac0, {CONNECTING <nil>}
    I0223 20:20:29.402977      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc029a15ac0, {READY <nil>}
    I0223 20:20:29.403840      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:20:30.023570      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:20:30.023613      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:20:30.023624      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:20:30.023726      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc029b412f0, {CONNECTING <nil>}
    I0223 20:20:30.034704      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc029b412f0, {READY <nil>}
    I0223 20:20:30.036001      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 20:20:33.135943      17 controller.go:116] loading OpenAPI spec for "v1.admission.work.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:20:33.135977      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.work.open-cluster-management.io: Rate Limited Requeue.
    E0223 20:20:33.142583      17 controller.go:116] loading OpenAPI spec for "v1beta1.webhook.certmanager.k8s.io" failed with: OpenAPI spec does not exist
    I0223 20:20:33.142614      17 controller.go:129] OpenAPI AggregationController: action for item v1beta1.webhook.certmanager.k8s.io: Rate Limited Requeue.
    E0223 20:20:33.170265      17 controller.go:116] loading OpenAPI spec for "v1.admission.hive.openshift.io" failed with: OpenAPI spec does not exist
    I0223 20:20:33.170298      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.hive.openshift.io: Rate Limited Requeue.
    E0223 20:20:33.196894      17 controller.go:116] loading OpenAPI spec for "v1.admission.cluster.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:20:33.196936      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.cluster.open-cluster-management.io: Rate Limited Requeue.
    I0223 20:20:44.928073      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:20:44.928120      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:20:44.928132      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:20:44.929316      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc00ea65340, {CONNECTING <nil>}
    I0223 20:20:44.948304      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc00ea65340, {READY <nil>}
    I0223 20:20:44.950235      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:20:47.208399      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:20:47.208455      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:20:47.225657      17 store.go:1376] Monitoring services.serving.knative.dev count at <storage-prefix>//serving.knative.dev/services
    I0223 20:20:47.247817      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    I0223 20:20:47.857576      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:20:47.857623      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:20:47.870245      17 store.go:1376] Monitoring routes.serving.knative.dev count at <storage-prefix>//serving.knative.dev/routes
    I0223 20:20:47.885130      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    I0223 20:20:48.947820      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:20:48.947873      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:20:48.961196      17 store.go:1376] Monitoring containersources.sources.knative.dev count at <storage-prefix>//sources.knative.dev/containersources
    I0223 20:20:48.964060      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:20:48.964109      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:20:48.966682      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    I0223 20:20:48.981650      17 store.go:1376] Monitoring containersources.sources.knative.dev count at <storage-prefix>//sources.knative.dev/containersources
    I0223 20:20:48.985140      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:20:48.985187      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:20:48.987028      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    I0223 20:20:48.999345      17 store.go:1376] Monitoring containersources.sources.knative.dev count at <storage-prefix>//sources.knative.dev/containersources
    I0223 20:20:49.005549      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    I0223 20:20:51.498408      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:20:51.498451      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:20:51.509678      17 store.go:1376] Monitoring apiserversources.sources.knative.dev count at <storage-prefix>//sources.knative.dev/apiserversources
    I0223 20:20:51.512184      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:20:51.512304      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:20:51.522872      17 store.go:1376] Monitoring apiserversources.sources.knative.dev count at <storage-prefix>//sources.knative.dev/apiserversources
    I0223 20:20:51.525809      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:20:51.525856      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:20:51.543218      17 store.go:1376] Monitoring apiserversources.sources.knative.dev count at <storage-prefix>//sources.knative.dev/apiserversources
    I0223 20:20:51.545264      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:20:51.545439      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:20:51.555210      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    I0223 20:20:51.562299      17 store.go:1376] Monitoring apiserversources.sources.knative.dev count at <storage-prefix>//sources.knative.dev/apiserversources
    I0223 20:20:51.676854      17 trace.go:205] Trace[44294503]: "Call conversion webhook" custom-resource-definition:apiserversources.sources.knative.dev,desired-api-version:sources.knative.dev/v1alpha2,object-count:1,UID:b82262d3-6872-45cc-979a-ba51ab9faa7d (23-Feb-2021 20:20:51.594) (total time: 82ms):
    Trace[44294503]: ---"Request completed" 82ms (20:20:00.676)
    Trace[44294503]: [82.326946ms] [82.326946ms] END
    I0223 20:20:51.677156      17 trace.go:205] Trace[1957840350]: "Call conversion webhook" custom-resource-definition:apiserversources.sources.knative.dev,desired-api-version:sources.knative.dev/v1alpha1,object-count:1,UID:82c52a56-1f85-4abd-8442-65f8a68a6bea (23-Feb-2021 20:20:51.594) (total time: 82ms):
    Trace[1957840350]: ---"Request completed" 82ms (20:20:00.677)
    Trace[1957840350]: [82.971132ms] [82.971132ms] END
    I0223 20:20:51.677309      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    I0223 20:20:51.677483      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    I0223 20:20:51.677891      17 trace.go:205] Trace[978801428]: "Call conversion webhook" custom-resource-definition:apiserversources.sources.knative.dev,desired-api-version:sources.knative.dev/v1,object-count:1,UID:3dd0b9fb-3fc7-4ddb-afef-a6adf9136f27 (23-Feb-2021 20:20:51.593) (total time: 84ms):
    Trace[978801428]: ---"Request completed" 84ms (20:20:00.677)
    Trace[978801428]: [84.191791ms] [84.191791ms] END
    I0223 20:20:51.678347      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    I0223 20:20:53.483444      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:20:53.490707      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:20:53.508721      17 store.go:1376] Monitoring brokers.eventing.knative.dev count at <storage-prefix>//eventing.knative.dev/brokers
    I0223 20:20:53.513597      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:20:53.513650      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:20:53.531993      17 store.go:1376] Monitoring brokers.eventing.knative.dev count at <storage-prefix>//eventing.knative.dev/brokers
    I0223 20:20:53.540581      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    I0223 20:20:53.542713      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    I0223 20:20:54.921439      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:20:54.921484      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:20:54.940185      17 store.go:1376] Monitoring kafkasources.sources.knative.dev count at <storage-prefix>//sources.knative.dev/kafkasources
    I0223 20:20:54.944007      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:20:54.944065      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:20:54.945537      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    I0223 20:20:54.955945      17 store.go:1376] Monitoring kafkasources.sources.knative.dev count at <storage-prefix>//sources.knative.dev/kafkasources
    I0223 20:20:54.961801      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    I0223 20:20:55.008962      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:20:55.009015      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:20:55.023853      17 store.go:1376] Monitoring channels.messaging.knative.dev count at <storage-prefix>//messaging.knative.dev/channels
    I0223 20:20:55.026196      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:20:55.026236      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:20:55.043368      17 store.go:1376] Monitoring channels.messaging.knative.dev count at <storage-prefix>//messaging.knative.dev/channels
    I0223 20:20:55.051526      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    I0223 20:20:55.060572      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    I0223 20:20:55.719245      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:20:55.719300      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:20:55.733076      17 store.go:1376] Monitoring kafkachannels.messaging.knative.dev count at <storage-prefix>//messaging.knative.dev/kafkachannels
    I0223 20:20:55.734835      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:20:55.734881      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:20:55.741589      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    I0223 20:20:55.747813      17 store.go:1376] Monitoring kafkachannels.messaging.knative.dev count at <storage-prefix>//messaging.knative.dev/kafkachannels
    I0223 20:20:55.751478      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    I0223 20:20:56.118157      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:20:56.118215      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:20:56.128804      17 store.go:1376] Monitoring kameletbindings.camel.apache.org count at <storage-prefix>//camel.apache.org/kameletbindings
    I0223 20:20:56.139418      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    I0223 20:21:02.402121      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:21:02.402175      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:21:02.402190      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:21:02.402476      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc028286450, {CONNECTING <nil>}
    I0223 20:21:02.414243      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc028286450, {READY <nil>}
    I0223 20:21:02.415843      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:21:02.973381      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:21:02.973432      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:21:02.991475      17 store.go:1376] Monitoring pingsources.sources.knative.dev count at <storage-prefix>//sources.knative.dev/pingsources
    I0223 20:21:03.003073      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:21:03.003118      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:21:03.018175      17 store.go:1376] Monitoring pingsources.sources.knative.dev count at <storage-prefix>//sources.knative.dev/pingsources
    I0223 20:21:03.035620      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    I0223 20:21:03.050309      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    I0223 20:21:03.807464      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:21:03.807513      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:21:03.807530      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:21:03.808520      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02436c8b0, {CONNECTING <nil>}
    I0223 20:21:03.819977      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02436c8b0, {READY <nil>}
    I0223 20:21:03.821475      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:21:10.141514      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:21:10.141570      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:21:10.141587      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:21:10.141706      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0166cbe30, {CONNECTING <nil>}
    I0223 20:21:10.151655      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0166cbe30, {READY <nil>}
    I0223 20:21:10.152633      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:21:10.939849      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:21:10.939894      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:21:10.955214      17 store.go:1376] Monitoring integrations.camel.apache.org count at <storage-prefix>//camel.apache.org/integrations
    I0223 20:21:10.961059      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    I0223 20:21:25.056781      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:21:25.056828      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:21:25.056840      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:21:25.057019      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02c79c300, {CONNECTING <nil>}
    I0223 20:21:25.077718      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02c79c300, {READY <nil>}
    I0223 20:21:25.079513      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:21:37.374492      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:21:37.374547      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:21:37.374564      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:21:37.374714      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc021770900, {CONNECTING <nil>}
    I0223 20:21:37.389460      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc021770900, {READY <nil>}
    I0223 20:21:37.391193      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:21:42.784500      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:21:42.784543      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:21:42.784553      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:21:42.784643      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0223e4580, {CONNECTING <nil>}
    I0223 20:21:42.795068      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0223e4580, {READY <nil>}
    I0223 20:21:42.796015      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:21:50.187564      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:21:50.187627      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:21:50.187645      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:21:50.187740      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02d004990, {CONNECTING <nil>}
    I0223 20:21:50.202185      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02d004990, {READY <nil>}
    I0223 20:21:50.203094      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:21:54.686230      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:21:54.686305      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:21:54.703746      17 store.go:1376] Monitoring kamelets.camel.apache.org count at <storage-prefix>//camel.apache.org/kamelets
    I0223 20:21:54.708111      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    I0223 20:21:57.907930      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:21:57.908028      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:21:57.908045      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:21:57.908361      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc016ce1190, {CONNECTING <nil>}
    I0223 20:21:57.920946      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc016ce1190, {READY <nil>}
    I0223 20:21:57.922239      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:22:07.377066      17 cacher.go:782] cacher (*core.ConfigMap): 3 objects queued in incoming channel.
    I0223 20:22:07.377094      17 cacher.go:782] cacher (*core.ConfigMap): 4 objects queued in incoming channel.
    I0223 20:22:20.649500      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:22:20.649579      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:22:20.649595      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:22:20.649997      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01c4d1d40, {CONNECTING <nil>}
    I0223 20:22:20.667142      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01c4d1d40, {READY <nil>}
    I0223 20:22:20.668648      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:22:27.222025      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:22:27.222068      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:22:27.222083      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:22:27.222386      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01ff651a0, {CONNECTING <nil>}
    I0223 20:22:27.232819      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01ff651a0, {READY <nil>}
    I0223 20:22:27.233794      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:22:28.961107      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:22:28.961150      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:22:28.961195      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:22:28.961284      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc028287400, {CONNECTING <nil>}
    I0223 20:22:28.970899      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc028287400, {READY <nil>}
    I0223 20:22:28.971814      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 20:22:33.158968      17 controller.go:116] loading OpenAPI spec for "v1.admission.work.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:22:33.159006      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.work.open-cluster-management.io: Rate Limited Requeue.
    E0223 20:22:33.159940      17 upgradeaware.go:387] Error proxying data from backend to client: tls: use of closed connection
    E0223 20:22:33.171092      17 controller.go:116] loading OpenAPI spec for "v1beta1.webhook.certmanager.k8s.io" failed with: OpenAPI spec does not exist
    I0223 20:22:33.171117      17 controller.go:129] OpenAPI AggregationController: action for item v1beta1.webhook.certmanager.k8s.io: Rate Limited Requeue.
    E0223 20:22:33.184522      17 controller.go:116] loading OpenAPI spec for "v1.admission.hive.openshift.io" failed with: OpenAPI spec does not exist
    I0223 20:22:33.184548      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.hive.openshift.io: Rate Limited Requeue.
    E0223 20:22:33.211161      17 controller.go:116] loading OpenAPI spec for "v1.admission.cluster.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:22:33.211189      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.cluster.open-cluster-management.io: Rate Limited Requeue.
    I0223 20:22:39.034968      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:22:39.035031      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:22:39.035054      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:22:39.035371      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02b810c30, {CONNECTING <nil>}
    I0223 20:22:39.048759      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02b810c30, {READY <nil>}
    I0223 20:22:39.050360      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:22:56.559219      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:22:56.559301      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:22:56.559317      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:22:56.559594      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02d4be450, {CONNECTING <nil>}
    I0223 20:22:56.572545      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02d4be450, {READY <nil>}
    I0223 20:22:56.573996      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:23:00.650341      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:23:00.650397      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:23:00.650413      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:23:00.650656      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01ff0c5f0, {CONNECTING <nil>}
    I0223 20:23:00.661757      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01ff0c5f0, {READY <nil>}
    I0223 20:23:00.664431      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:23:01.450718      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:23:01.450773      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:23:01.450791      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:23:01.451160      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02cbd95f0, {CONNECTING <nil>}
    I0223 20:23:01.461109      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02cbd95f0, {READY <nil>}
    I0223 20:23:01.462401      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:23:11.415878      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:23:11.415928      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:23:11.415981      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:23:11.416118      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02315e9e0, {CONNECTING <nil>}
    I0223 20:23:11.430865      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02315e9e0, {READY <nil>}
    I0223 20:23:11.432292      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:23:35.139037      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:23:35.139093      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:23:35.139108      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:23:35.139451      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc00815ff00, {CONNECTING <nil>}
    I0223 20:23:35.151568      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc00815ff00, {READY <nil>}
    I0223 20:23:35.153076      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:23:41.818154      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:23:41.818199      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:23:41.818214      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:23:41.818653      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc00f8b62a0, {CONNECTING <nil>}
    I0223 20:23:41.828464      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc00f8b62a0, {READY <nil>}
    I0223 20:23:41.829539      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:23:42.115405      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:23:42.115459      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:23:42.115476      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:23:42.115896      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc00fa5f6c0, {CONNECTING <nil>}
    I0223 20:23:42.132811      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc00fa5f6c0, {READY <nil>}
    I0223 20:23:42.135036      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:23:50.199064      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:23:50.199120      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:23:50.199137      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:23:50.199266      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc014183670, {CONNECTING <nil>}
    I0223 20:23:50.218182      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc014183670, {READY <nil>}
    I0223 20:23:50.220051      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:24:13.153602      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:24:13.153658      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:24:13.153674      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:24:13.154010      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0286efba0, {CONNECTING <nil>}
    I0223 20:24:13.165387      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0286efba0, {READY <nil>}
    I0223 20:24:13.166606      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:24:14.116378      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:24:14.116423      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:24:14.116435      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:24:14.116534      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc026f54780, {CONNECTING <nil>}
    I0223 20:24:14.128847      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc026f54780, {READY <nil>}
    I0223 20:24:14.130388      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:24:22.310087      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:24:22.310317      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:24:22.310370      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:24:22.310469      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02783fa90, {CONNECTING <nil>}
    I0223 20:24:22.323418      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02783fa90, {READY <nil>}
    I0223 20:24:22.324796      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:24:25.349540      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:24:25.349602      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:24:25.349620      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:24:25.349797      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc015f209d0, {CONNECTING <nil>}
    I0223 20:24:25.360371      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc015f209d0, {READY <nil>}
    I0223 20:24:25.361219      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 20:24:33.125753      17 controller.go:116] loading OpenAPI spec for "v1.admission.work.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:24:33.125793      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.work.open-cluster-management.io: Rate Limited Requeue.
    E0223 20:24:33.142741      17 controller.go:116] loading OpenAPI spec for "v1beta1.webhook.certmanager.k8s.io" failed with: OpenAPI spec does not exist
    I0223 20:24:33.142777      17 controller.go:129] OpenAPI AggregationController: action for item v1beta1.webhook.certmanager.k8s.io: Rate Limited Requeue.
    E0223 20:24:33.161077      17 controller.go:116] loading OpenAPI spec for "v1.admission.hive.openshift.io" failed with: OpenAPI spec does not exist
    I0223 20:24:33.161118      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.hive.openshift.io: Rate Limited Requeue.
    E0223 20:24:33.179165      17 controller.go:116] loading OpenAPI spec for "v1.admission.cluster.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:24:33.179206      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.cluster.open-cluster-management.io: Rate Limited Requeue.
    I0223 20:24:46.789861      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:24:46.791139      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:24:46.791166      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:24:46.791698      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0204db760, {CONNECTING <nil>}
    I0223 20:24:46.802136      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0204db760, {READY <nil>}
    I0223 20:24:46.803194      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:24:47.908668      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:24:47.908751      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:24:47.908763      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:24:47.908870      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc021665420, {CONNECTING <nil>}
    I0223 20:24:47.923052      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc021665420, {READY <nil>}
    I0223 20:24:47.925283      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:25:02.883303      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:25:02.883372      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:25:02.883389      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:25:02.883644      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02d68f6c0, {CONNECTING <nil>}
    I0223 20:25:02.897543      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02d68f6c0, {READY <nil>}
    I0223 20:25:02.898776      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:25:04.267407      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:25:04.267466      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:25:04.267482      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:25:04.267800      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02ec56230, {CONNECTING <nil>}
    I0223 20:25:04.279680      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02ec56230, {READY <nil>}
    I0223 20:25:04.281191      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:25:20.519542      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:25:20.519592      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:25:20.519611      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:25:20.519808      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02edfbaf0, {CONNECTING <nil>}
    I0223 20:25:20.530307      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02edfbaf0, {READY <nil>}
    I0223 20:25:20.534521      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:25:30.106490      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:25:30.106534      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:25:30.106548      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:25:30.106647      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc014a97500, {CONNECTING <nil>}
    I0223 20:25:30.120784      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc014a97500, {READY <nil>}
    I0223 20:25:30.122103      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 20:25:33.132771      17 controller.go:116] loading OpenAPI spec for "v1.admission.work.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:25:33.132805      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.work.open-cluster-management.io: Rate Limited Requeue.
    E0223 20:25:33.149034      17 controller.go:116] loading OpenAPI spec for "v1beta1.webhook.certmanager.k8s.io" failed with: OpenAPI spec does not exist
    I0223 20:25:33.149068      17 controller.go:129] OpenAPI AggregationController: action for item v1beta1.webhook.certmanager.k8s.io: Rate Limited Requeue.
    E0223 20:25:33.175529      17 controller.go:116] loading OpenAPI spec for "v1.admission.hive.openshift.io" failed with: OpenAPI spec does not exist
    I0223 20:25:33.175558      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.hive.openshift.io: Rate Limited Requeue.
    E0223 20:25:33.184438      17 controller.go:116] loading OpenAPI spec for "v1.admission.cluster.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:25:33.184472      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.cluster.open-cluster-management.io: Rate Limited Requeue.
    I0223 20:25:38.887365      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:25:38.887418      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:25:38.887435      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:25:38.888044      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc016778ce0, {CONNECTING <nil>}
    I0223 20:25:38.905180      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc016778ce0, {READY <nil>}
    I0223 20:25:38.907366      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:25:43.149332      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:25:43.149427      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:25:43.149444      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:25:43.149709      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02a315240, {CONNECTING <nil>}
    I0223 20:25:43.161854      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02a315240, {READY <nil>}
    I0223 20:25:43.163565      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:26:00.508499      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:26:00.508651      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:26:00.508700      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:26:00.508956      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01566a4a0, {CONNECTING <nil>}
    I0223 20:26:00.520985      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01566a4a0, {READY <nil>}
    I0223 20:26:00.526054      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:26:03.876104      17 cacher.go:782] cacher (*rbac.ClusterRole): 1 objects queued in incoming channel.
    I0223 20:26:03.876134      17 cacher.go:782] cacher (*rbac.ClusterRole): 2 objects queued in incoming channel.
    I0223 20:26:04.808576      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:26:04.808666      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:26:04.808684      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:26:04.808955      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc008f43940, {CONNECTING <nil>}
    I0223 20:26:04.831198      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc008f43940, {READY <nil>}
    I0223 20:26:04.838327      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:26:20.030155      17 trace.go:205] Trace[1734552667]: "List" url:/apis/console.openshift.io/v1/consolequickstarts,user-agent:Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36 Edg/88.0.705.74,client:::1 (23-Feb-2021 20:26:18.618) (total time: 1411ms):
    Trace[1734552667]: ---"Writing http response done" count:11 1400ms (20:26:00.030)
    Trace[1734552667]: [1.411391929s] [1.411391929s] END
    I0223 20:26:22.371479      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:26:22.371541      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:26:22.371558      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:26:22.371853      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc015c95f80, {CONNECTING <nil>}
    I0223 20:26:22.387508      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc015c95f80, {READY <nil>}
    I0223 20:26:22.389024      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:26:23.173172      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:26:23.173266      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:26:23.173294      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:26:23.175057      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01fb49e20, {CONNECTING <nil>}
    I0223 20:26:23.188128      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01fb49e20, {READY <nil>}
    I0223 20:26:23.189477      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 20:26:29.232457      17 writers.go:107] apiserver was unable to write a JSON response: http: Handler timeout
    E0223 20:26:29.232574      17 status.go:71] apiserver received an error that is not an metav1.Status: &errors.errorString{s:"http: Handler timeout"}
    E0223 20:26:29.234116      17 writers.go:120] apiserver was unable to write a fallback JSON response: http: Handler timeout
    I0223 20:26:36.162998      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:26:36.163054      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:26:36.163069      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:26:36.163299      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01dc0c760, {CONNECTING <nil>}
    I0223 20:26:36.172816      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01dc0c760, {READY <nil>}
    I0223 20:26:36.174330      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:26:38.033962      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:26:38.034007      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:26:38.034020      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:26:38.034107      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0248ac080, {CONNECTING <nil>}
    I0223 20:26:38.045685      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0248ac080, {READY <nil>}
    I0223 20:26:38.047127      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:26:54.983645      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:26:54.983692      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:26:54.983708      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:26:54.983903      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc024167100, {CONNECTING <nil>}
    I0223 20:26:54.997478      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc024167100, {READY <nil>}
    I0223 20:26:55.001178      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:27:01.149230      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:27:01.149296      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:27:01.149315      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:27:01.149480      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02b1e4c10, {CONNECTING <nil>}
    I0223 20:27:01.162123      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02b1e4c10, {READY <nil>}
    I0223 20:27:01.163383      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:27:11.730688      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:27:11.730735      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:27:11.730751      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:27:11.730913      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02ceeb7e0, {CONNECTING <nil>}
    I0223 20:27:11.740267      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02ceeb7e0, {READY <nil>}
    I0223 20:27:11.741361      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:27:18.787381      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:27:18.787445      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:27:18.787461      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:27:18.787637      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc028b243a0, {CONNECTING <nil>}
    I0223 20:27:18.799054      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc028b243a0, {READY <nil>}
    I0223 20:27:18.800474      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:27:27.215831      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:27:27.216131      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:27:27.216277      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:27:27.216424      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc029734d30, {CONNECTING <nil>}
    I0223 20:27:27.228065      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc029734d30, {READY <nil>}
    I0223 20:27:27.229564      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 20:27:33.149055      17 controller.go:116] loading OpenAPI spec for "v1.admission.work.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:27:33.149090      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.work.open-cluster-management.io: Rate Limited Requeue.
    E0223 20:27:33.164164      17 controller.go:116] loading OpenAPI spec for "v1beta1.webhook.certmanager.k8s.io" failed with: OpenAPI spec does not exist
    I0223 20:27:33.164196      17 controller.go:129] OpenAPI AggregationController: action for item v1beta1.webhook.certmanager.k8s.io: Rate Limited Requeue.
    E0223 20:27:33.185302      17 controller.go:116] loading OpenAPI spec for "v1.admission.hive.openshift.io" failed with: OpenAPI spec does not exist
    I0223 20:27:33.185342      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.hive.openshift.io: Rate Limited Requeue.
    E0223 20:27:33.187481      17 controller.go:116] loading OpenAPI spec for "v1.admission.cluster.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:27:33.187520      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.cluster.open-cluster-management.io: Rate Limited Requeue.
    I0223 20:27:34.373010      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:27:34.373056      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:27:34.373069      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:27:34.373158      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01546e580, {CONNECTING <nil>}
    I0223 20:27:34.383103      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01546e580, {READY <nil>}
    I0223 20:27:34.384601      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:27:51.269795      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:27:51.269853      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:27:51.290269      17 store.go:1376] Monitoring clusteroperators.config.openshift.io count at <storage-prefix>//config.openshift.io/clusteroperators
    I0223 20:27:51.317241      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    E0223 20:27:51.731119      17 customresource_handler.go:669] error building openapi models for subscriptions.operators.coreos.com: ERROR $root.definitions.com.coreos.operators.v1alpha1.Subscription.properties.spec.properties.config.properties.env.items.<array>.properties.valueFrom.properties.resourceFieldRef.properties.divisor has invalid property: anyOf
    ERROR $root.definitions.com.coreos.operators.v1alpha1.Subscription.properties.spec.properties.config.properties.resources.properties.limits.additionalProperties.schema has invalid property: anyOf
    ERROR $root.definitions.com.coreos.operators.v1alpha1.Subscription.properties.spec.properties.config.properties.resources.properties.requests.additionalProperties.schema has invalid property: anyOf
    ERROR $root.definitions.com.coreos.operators.v1alpha1.Subscription.properties.spec.properties.config.properties.volumes.items.<array>.properties.downwardAPI.properties.items.items.<array>.properties.resourceFieldRef.properties.divisor has invalid property: anyOf
    ERROR $root.definitions.com.coreos.operators.v1alpha1.Subscription.properties.spec.properties.config.properties.volumes.items.<array>.properties.emptyDir.properties.sizeLimit has invalid property: anyOf
    ERROR $root.definitions.com.coreos.operators.v1alpha1.Subscription.properties.spec.properties.config.properties.volumes.items.<array>.properties.ephemeral.properties.volumeClaimTemplate.properties.spec.properties.resources.properties.limits.additionalProperties.schema has invalid property: anyOf
    ERROR $root.definitions.com.coreos.operators.v1alpha1.Subscription.properties.spec.properties.config.properties.volumes.items.<array>.properties.ephemeral.properties.volumeClaimTemplate.properties.spec.properties.resources.properties.requests.additionalProperties.schema has invalid property: anyOf
    ERROR $root.definitions.com.coreos.operators.v1alpha1.Subscription.properties.spec.properties.config.properties.volumes.items.<array>.properties.projected.properties.sources.items.<array>.properties.downwardAPI.properties.items.items.<array>.properties.resourceFieldRef.properties.divisor has invalid property: anyOf
    I0223 20:27:51.732839      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:27:51.732880      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:27:51.746528      17 store.go:1376] Monitoring subscriptions.operators.coreos.com count at <storage-prefix>//operators.coreos.com/subscriptions
    I0223 20:27:51.759964      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    I0223 20:27:52.352849      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:27:52.352895      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:27:52.352947      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:27:52.353183      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc04f7973f0, {CONNECTING <nil>}
    I0223 20:27:52.362900      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc04f7973f0, {READY <nil>}
    I0223 20:27:52.363826      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:27:54.410402      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:27:54.410455      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:27:54.424487      17 store.go:1376] Monitoring cephclusters.ceph.rook.io count at <storage-prefix>//ceph.rook.io/cephclusters
    I0223 20:27:54.430429      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    I0223 20:27:54.594769      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:27:54.594812      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:27:54.594823      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:27:54.595131      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01dd58c10, {CONNECTING <nil>}
    I0223 20:27:54.607846      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01dd58c10, {READY <nil>}
    I0223 20:27:54.609129      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:28:09.698538      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:28:09.698584      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:28:09.698602      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:28:09.698702      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01c32a090, {CONNECTING <nil>}
    I0223 20:28:09.713272      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01c32a090, {READY <nil>}
    I0223 20:28:09.717556      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:28:09.887909      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:28:09.888002      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:28:09.888021      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:28:09.888356      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc017baf290, {CONNECTING <nil>}
    I0223 20:28:09.901690      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc017baf290, {READY <nil>}
    I0223 20:28:09.902723      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:28:25.678494      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:28:25.678557      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:28:25.678574      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:28:25.678944      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02bed5d40, {CONNECTING <nil>}
    I0223 20:28:25.691030      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02bed5d40, {READY <nil>}
    I0223 20:28:25.692939      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:28:26.716151      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:28:26.716204      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:28:26.716219      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:28:26.716383      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02ac6e230, {CONNECTING <nil>}
    I0223 20:28:26.726957      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02ac6e230, {READY <nil>}
    I0223 20:28:26.728132      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:28:39.349768      17 cacher.go:782] cacher (*core.ConfigMap): 5 objects queued in incoming channel.
    I0223 20:28:39.349817      17 cacher.go:782] cacher (*core.ConfigMap): 6 objects queued in incoming channel.
    I0223 20:28:47.521360      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:28:47.521403      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:28:47.521413      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:28:47.521505      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0203331a0, {CONNECTING <nil>}
    I0223 20:28:47.533134      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0203331a0, {READY <nil>}
    I0223 20:28:47.534543      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:28:51.498224      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:28:51.498278      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:28:51.498290      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:28:51.498560      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc028b78120, {CONNECTING <nil>}
    I0223 20:28:51.509904      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc028b78120, {READY <nil>}
    I0223 20:28:51.510904      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:28:55.785149      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:28:55.785201      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:28:55.785260      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:28:55.785505      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc029502800, {CONNECTING <nil>}
    I0223 20:28:55.804173      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc029502800, {READY <nil>}
    I0223 20:28:55.815170      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:29:11.303867      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:29:11.303951      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:29:11.303970      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:29:11.304278      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc00d821460, {CONNECTING <nil>}
    I0223 20:29:11.314431      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc00d821460, {READY <nil>}
    I0223 20:29:11.315648      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:29:24.591952      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:29:24.592044      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:29:24.592062      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:29:24.592175      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0148458d0, {CONNECTING <nil>}
    I0223 20:29:24.594333      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:29:24.594372      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:29:24.594386      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:29:24.594658      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc00aa49f40, {CONNECTING <nil>}
    I0223 20:29:24.605278      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0148458d0, {READY <nil>}
    I0223 20:29:24.606123      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc00aa49f40, {READY <nil>}
    I0223 20:29:24.606915      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:29:24.608796      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:29:27.599132      17 trace.go:205] Trace[1008713815]: "List" url:/apis/console.openshift.io/v1/consolequickstarts,user-agent:Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36 Edg/88.0.705.74,client:::1 (23-Feb-2021 20:29:26.169) (total time: 1429ms):
    Trace[1008713815]: ---"Writing http response done" count:11 1420ms (20:29:00.599)
    Trace[1008713815]: [1.429871792s] [1.429871792s] END
    I0223 20:29:32.796184      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:29:32.796246      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:29:32.796262      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:29:32.796695      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc020431df0, {CONNECTING <nil>}
    I0223 20:29:32.809285      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc020431df0, {READY <nil>}
    I0223 20:29:32.810849      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 20:29:33.110565      17 controller.go:116] loading OpenAPI spec for "v1.admission.work.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:29:33.110597      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.work.open-cluster-management.io: Rate Limited Requeue.
    E0223 20:29:33.124406      17 controller.go:116] loading OpenAPI spec for "v1beta1.webhook.certmanager.k8s.io" failed with: OpenAPI spec does not exist
    I0223 20:29:33.124433      17 controller.go:129] OpenAPI AggregationController: action for item v1beta1.webhook.certmanager.k8s.io: Rate Limited Requeue.
    E0223 20:29:33.149485      17 controller.go:116] loading OpenAPI spec for "v1.admission.hive.openshift.io" failed with: OpenAPI spec does not exist
    I0223 20:29:33.149519      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.hive.openshift.io: Rate Limited Requeue.
    E0223 20:29:33.163873      17 controller.go:116] loading OpenAPI spec for "v1.admission.cluster.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:29:33.163898      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.cluster.open-cluster-management.io: Rate Limited Requeue.
    I0223 20:29:42.097462      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:29:42.097508      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:29:42.097518      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:29:42.097603      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02990a1e0, {CONNECTING <nil>}
    I0223 20:29:42.108625      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02990a1e0, {READY <nil>}
    I0223 20:29:42.110579      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:29:59.878722      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:29:59.878773      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:29:59.878789      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:29:59.878941      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0159bc970, {CONNECTING <nil>}
    I0223 20:29:59.896215      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0159bc970, {READY <nil>}
    I0223 20:29:59.897825      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 20:30:00.499168      17 writers.go:107] apiserver was unable to write a JSON response: http: Handler timeout
    E0223 20:30:00.499308      17 status.go:71] apiserver received an error that is not an metav1.Status: &errors.errorString{s:"http: Handler timeout"}
    E0223 20:30:00.500625      17 writers.go:120] apiserver was unable to write a fallback JSON response: http: Handler timeout
    I0223 20:30:03.695204      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:30:03.695273      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:30:03.695292      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:30:03.695508      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc00e3907a0, {CONNECTING <nil>}
    I0223 20:30:03.705858      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc00e3907a0, {READY <nil>}
    I0223 20:30:03.707006      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 20:30:08.182342      17 writers.go:107] apiserver was unable to write a JSON response: http: Handler timeout
    E0223 20:30:08.182461      17 status.go:71] apiserver received an error that is not an metav1.Status: &errors.errorString{s:"http: Handler timeout"}
    E0223 20:30:08.183727      17 writers.go:120] apiserver was unable to write a fallback JSON response: http: Handler timeout
    I0223 20:30:09.485060      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:30:09.485123      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:30:09.485140      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:30:09.485461      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc00eadba20, {CONNECTING <nil>}
    I0223 20:30:09.498631      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc00eadba20, {READY <nil>}
    I0223 20:30:09.500144      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:30:13.698830      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:30:13.698873      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:30:13.698887      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:30:13.699067      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc070472340, {CONNECTING <nil>}
    I0223 20:30:13.709140      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc070472340, {READY <nil>}
    I0223 20:30:13.709979      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 20:30:33.116212      17 controller.go:116] loading OpenAPI spec for "v1.admission.work.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:30:33.116238      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.work.open-cluster-management.io: Rate Limited Requeue.
    E0223 20:30:33.130066      17 controller.go:116] loading OpenAPI spec for "v1beta1.webhook.certmanager.k8s.io" failed with: OpenAPI spec does not exist
    I0223 20:30:33.130092      17 controller.go:129] OpenAPI AggregationController: action for item v1beta1.webhook.certmanager.k8s.io: Rate Limited Requeue.
    E0223 20:30:33.164513      17 controller.go:116] loading OpenAPI spec for "v1.admission.hive.openshift.io" failed with: OpenAPI spec does not exist
    I0223 20:30:33.164600      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.hive.openshift.io: Rate Limited Requeue.
    E0223 20:30:33.168839      17 controller.go:116] loading OpenAPI spec for "v1.admission.cluster.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:30:33.168862      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.cluster.open-cluster-management.io: Rate Limited Requeue.
    I0223 20:30:39.315438      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:30:39.315483      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:30:39.315500      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:30:39.315828      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01ff65f80, {CONNECTING <nil>}
    I0223 20:30:39.326739      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01ff65f80, {READY <nil>}
    I0223 20:30:39.328077      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:30:40.870348      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:30:40.870634      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:30:40.870760      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:30:40.871310      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc022511af0, {CONNECTING <nil>}
    I0223 20:30:40.881485      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc022511af0, {READY <nil>}
    I0223 20:30:40.882398      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:30:43.934465      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:30:43.934540      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:30:43.934559      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:30:43.934974      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02ab3d8e0, {CONNECTING <nil>}
    I0223 20:30:43.951558      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02ab3d8e0, {READY <nil>}
    I0223 20:30:43.954795      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:30:58.564777      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:30:58.564829      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:30:58.564846      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:30:58.565023      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02016dc00, {CONNECTING <nil>}
    I0223 20:30:58.574400      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02016dc00, {READY <nil>}
    I0223 20:30:58.575605      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:31:15.683374      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:31:15.683421      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:31:15.683434      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:31:15.683693      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0342705f0, {CONNECTING <nil>}
    I0223 20:31:15.701114      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0342705f0, {READY <nil>}
    I0223 20:31:15.702738      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:31:15.790280      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:31:15.790329      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:31:15.790345      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:31:15.790461      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc03430bed0, {CONNECTING <nil>}
    I0223 20:31:15.803429      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc03430bed0, {READY <nil>}
    I0223 20:31:15.804516      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:31:17.699809      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:31:17.699859      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:31:17.699876      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:31:17.700157      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0348abd10, {CONNECTING <nil>}
    I0223 20:31:17.712189      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0348abd10, {READY <nil>}
    I0223 20:31:17.714102      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:31:30.954831      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:31:30.954887      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:31:30.954903      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:31:30.955382      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc028f35830, {CONNECTING <nil>}
    I0223 20:31:30.964863      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc028f35830, {READY <nil>}
    I0223 20:31:30.966132      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:31:46.113310      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:31:46.113373      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:31:46.113393      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:31:46.113498      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01431d0c0, {CONNECTING <nil>}
    I0223 20:31:46.123701      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01431d0c0, {READY <nil>}
    I0223 20:31:46.124654      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:31:49.515151      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:31:49.515196      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:31:49.515207      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:31:49.515379      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc00878b510, {CONNECTING <nil>}
    I0223 20:31:49.526811      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc00878b510, {READY <nil>}
    I0223 20:31:49.528450      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:31:55.142822      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:31:55.142876      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:31:55.142888      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:31:55.143138      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc00ef91d30, {CONNECTING <nil>}
    I0223 20:31:55.153807      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc00ef91d30, {READY <nil>}
    I0223 20:31:55.155083      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:32:11.174813      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:32:11.174870      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:32:11.174883      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:32:11.174975      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc028011ce0, {CONNECTING <nil>}
    I0223 20:32:11.186267      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc028011ce0, {READY <nil>}
    I0223 20:32:11.188099      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:32:20.460016      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:32:20.460085      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:32:20.460101      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:32:20.460542      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02bbeb5e0, {CONNECTING <nil>}
    I0223 20:32:20.473711      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02bbeb5e0, {READY <nil>}
    I0223 20:32:20.474903      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:32:29.318034      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:32:29.318114      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:32:29.318131      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:32:29.318427      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02e3478b0, {CONNECTING <nil>}
    I0223 20:32:29.335165      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02e3478b0, {READY <nil>}
    I0223 20:32:29.338599      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:32:32.377525      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:32:32.377586      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:32:32.377601      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:32:32.377895      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0226fc8c0, {CONNECTING <nil>}
    I0223 20:32:32.389973      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0226fc8c0, {READY <nil>}
    I0223 20:32:32.391498      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 20:32:33.122230      17 controller.go:116] loading OpenAPI spec for "v1.admission.work.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:32:33.122259      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.work.open-cluster-management.io: Rate Limited Requeue.
    E0223 20:32:33.131639      17 controller.go:116] loading OpenAPI spec for "v1beta1.webhook.certmanager.k8s.io" failed with: OpenAPI spec does not exist
    I0223 20:32:33.131670      17 controller.go:129] OpenAPI AggregationController: action for item v1beta1.webhook.certmanager.k8s.io: Rate Limited Requeue.
    E0223 20:32:33.174547      17 controller.go:116] loading OpenAPI spec for "v1.admission.hive.openshift.io" failed with: OpenAPI spec does not exist
    I0223 20:32:33.174580      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.hive.openshift.io: Rate Limited Requeue.
    E0223 20:32:33.181051      17 controller.go:116] loading OpenAPI spec for "v1.admission.cluster.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:32:33.181078      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.cluster.open-cluster-management.io: Rate Limited Requeue.
    I0223 20:32:43.788567      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:32:43.788622      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:32:43.788638      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:32:43.788707      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc03524e960, {CONNECTING <nil>}
    I0223 20:32:43.798514      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc03524e960, {READY <nil>}
    I0223 20:32:43.800147      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 20:32:51.844091      17 wrap.go:54] timeout or abort while handling: POST "/api/v1/namespaces/josh/events"
    E0223 20:32:56.393541      17 status.go:71] apiserver received an error that is not an metav1.Status: &errors.errorString{s:"context canceled"}
    E0223 20:32:56.393597      17 writers.go:107] apiserver was unable to write a JSON response: http: Handler timeout
    E0223 20:32:56.394995      17 status.go:71] apiserver received an error that is not an metav1.Status: &errors.errorString{s:"http: Handler timeout"}
    E0223 20:32:56.395932      17 writers.go:120] apiserver was unable to write a fallback JSON response: http: Handler timeout
    I0223 20:32:59.401816      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:32:59.402045      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:32:59.402075      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:32:59.402402      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc029d8a790, {CONNECTING <nil>}
    I0223 20:32:59.411491      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc029d8a790, {READY <nil>}
    I0223 20:32:59.412307      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 20:33:12.318610      17 writers.go:107] apiserver was unable to write a JSON response: http: Handler timeout
    E0223 20:33:12.318735      17 status.go:71] apiserver received an error that is not an metav1.Status: &errors.errorString{s:"http: Handler timeout"}
    E0223 20:33:12.320064      17 writers.go:120] apiserver was unable to write a fallback JSON response: http: Handler timeout
    I0223 20:33:12.511510      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:33:12.511596      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:33:12.511615      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:33:12.511719      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0301dbb70, {CONNECTING <nil>}
    I0223 20:33:12.524688      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0301dbb70, {READY <nil>}
    I0223 20:33:12.525962      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:33:14.240202      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:33:14.240260      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:33:14.240276      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:33:14.240454      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc015097060, {CONNECTING <nil>}
    I0223 20:33:14.251752      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc015097060, {READY <nil>}
    I0223 20:33:14.253166      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:33:27.980693      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:33:27.980800      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:33:27.980819      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:33:27.980954      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc00c1b1140, {CONNECTING <nil>}
    I0223 20:33:27.992291      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc00c1b1140, {READY <nil>}
    I0223 20:33:27.993446      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:33:35.604958      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:33:35.605092      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:33:35.605119      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:33:35.605487      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc014d2c2c0, {CONNECTING <nil>}
    I0223 20:33:35.615541      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc014d2c2c0, {READY <nil>}
    I0223 20:33:35.616784      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 20:33:43.197235      17 customresource_handler.go:669] error building openapi models for managedclusters.cluster.open-cluster-management.io: ERROR $root.definitions.io.open-cluster-management.cluster.v1.ManagedCluster.properties.status.properties.allocatable.additionalProperties.schema has invalid property: anyOf
    ERROR $root.definitions.io.open-cluster-management.cluster.v1.ManagedCluster.properties.status.properties.capacity.additionalProperties.schema has invalid property: anyOf
    I0223 20:33:43.198338      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:33:43.198387      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:33:43.210941      17 store.go:1376] Monitoring managedclusters.cluster.open-cluster-management.io count at <storage-prefix>//cluster.open-cluster-management.io/managedclusters
    I0223 20:33:43.216360      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    I0223 20:33:52.284326      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:33:52.284372      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:33:52.284383      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:33:52.284649      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc041522530, {CONNECTING <nil>}
    I0223 20:33:52.297993      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc041522530, {READY <nil>}
    I0223 20:33:52.299516      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:33:52.449009      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:33:52.449054      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:33:52.449069      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:33:52.449349      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc041523590, {CONNECTING <nil>}
    I0223 20:33:52.461268      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc041523590, {READY <nil>}
    I0223 20:33:52.462667      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:34:04.732502      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:34:04.732546      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:34:04.732558      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:34:04.732651      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02c9bf3c0, {CONNECTING <nil>}
    I0223 20:34:04.742693      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02c9bf3c0, {READY <nil>}
    I0223 20:34:04.743717      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:34:15.007787      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:34:15.007845      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:34:15.007862      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:34:15.008189      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02951e940, {CONNECTING <nil>}
    I0223 20:34:15.018674      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02951e940, {READY <nil>}
    I0223 20:34:15.020524      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:34:31.095216      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:34:31.095273      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:34:31.095293      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:34:31.095636      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc005effc40, {CONNECTING <nil>}
    I0223 20:34:31.108698      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc005effc40, {READY <nil>}
    I0223 20:34:31.110358      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 20:34:33.114772      17 controller.go:116] loading OpenAPI spec for "v1.admission.work.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:34:33.114803      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.work.open-cluster-management.io: Rate Limited Requeue.
    E0223 20:34:33.127888      17 controller.go:116] loading OpenAPI spec for "v1beta1.webhook.certmanager.k8s.io" failed with: OpenAPI spec does not exist
    I0223 20:34:33.128040      17 controller.go:129] OpenAPI AggregationController: action for item v1beta1.webhook.certmanager.k8s.io: Rate Limited Requeue.
    E0223 20:34:33.175506      17 controller.go:116] loading OpenAPI spec for "v1.admission.hive.openshift.io" failed with: OpenAPI spec does not exist
    I0223 20:34:33.175601      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.hive.openshift.io: Rate Limited Requeue.
    E0223 20:34:33.190854      17 controller.go:116] loading OpenAPI spec for "v1.admission.cluster.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:34:33.190888      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.cluster.open-cluster-management.io: Rate Limited Requeue.
    I0223 20:34:36.795887      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:34:36.795971      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:34:36.795989      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:34:36.796185      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc03240a340, {CONNECTING <nil>}
    I0223 20:34:36.811362      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc03240a340, {READY <nil>}
    I0223 20:34:36.812808      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:34:42.535539      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:34:42.535605      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:34:42.535622      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:34:42.536072      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0342b7f30, {CONNECTING <nil>}
    I0223 20:34:42.545279      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0342b7f30, {READY <nil>}
    I0223 20:34:42.546631      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:34:53.022629      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:34:53.022690      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:34:53.022707      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:34:53.022849      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02b6b33c0, {CONNECTING <nil>}
    I0223 20:34:53.033329      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02b6b33c0, {READY <nil>}
    I0223 20:34:53.034573      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:35:15.411169      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:35:15.411217      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:35:15.411267      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:35:15.411603      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc00f822c70, {CONNECTING <nil>}
    I0223 20:35:15.422756      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc00f822c70, {READY <nil>}
    I0223 20:35:15.424150      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:35:19.256652      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:35:19.256698      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:35:19.256715      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:35:19.257079      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc00eada6c0, {CONNECTING <nil>}
    I0223 20:35:19.270274      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc00eada6c0, {READY <nil>}
    I0223 20:35:19.274041      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 20:35:19.641453      17 writers.go:107] apiserver was unable to write a JSON response: http: Handler timeout
    E0223 20:35:19.641556      17 status.go:71] apiserver received an error that is not an metav1.Status: &errors.errorString{s:"http: Handler timeout"}
    E0223 20:35:19.642624      17 writers.go:120] apiserver was unable to write a fallback JSON response: http: Handler timeout
    I0223 20:35:20.676802      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:35:20.676867      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:35:20.676885      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:35:20.677094      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc011363450, {CONNECTING <nil>}
    I0223 20:35:20.690081      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc011363450, {READY <nil>}
    I0223 20:35:20.691252      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:35:27.737182      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:35:27.737252      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:35:27.737301      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:35:27.737550      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc012907da0, {CONNECTING <nil>}
    I0223 20:35:27.751153      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc012907da0, {READY <nil>}
    I0223 20:35:27.752100      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 20:35:33.148549      17 controller.go:116] loading OpenAPI spec for "v1.admission.work.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:35:33.148575      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.work.open-cluster-management.io: Rate Limited Requeue.
    E0223 20:35:33.167110      17 controller.go:116] loading OpenAPI spec for "v1beta1.webhook.certmanager.k8s.io" failed with: OpenAPI spec does not exist
    I0223 20:35:33.167141      17 controller.go:129] OpenAPI AggregationController: action for item v1beta1.webhook.certmanager.k8s.io: Rate Limited Requeue.
    E0223 20:35:33.182775      17 controller.go:116] loading OpenAPI spec for "v1.admission.hive.openshift.io" failed with: OpenAPI spec does not exist
    I0223 20:35:33.182826      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.hive.openshift.io: Rate Limited Requeue.
    E0223 20:35:33.200548      17 controller.go:116] loading OpenAPI spec for "v1.admission.cluster.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:35:33.200580      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.cluster.open-cluster-management.io: Rate Limited Requeue.
    I0223 20:35:48.604525      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:35:48.604757      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:35:48.604784      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:35:48.604874      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc022ad2150, {CONNECTING <nil>}
    I0223 20:35:48.617491      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc022ad2150, {READY <nil>}
    I0223 20:35:48.618857      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:36:01.610125      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:36:01.610198      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:36:01.610213      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:36:01.610327      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0277a01f0, {CONNECTING <nil>}
    I0223 20:36:01.631364      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0277a01f0, {READY <nil>}
    I0223 20:36:01.633277      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:36:04.511764      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:36:04.511900      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:36:04.512011      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:36:04.513403      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc024bbb930, {CONNECTING <nil>}
    I0223 20:36:04.533150      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc024bbb930, {READY <nil>}
    I0223 20:36:04.539156      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:36:04.774183      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:36:04.774253      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:36:04.774272      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:36:04.774622      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01591b110, {CONNECTING <nil>}
    I0223 20:36:04.798386      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01591b110, {READY <nil>}
    I0223 20:36:04.802749      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:36:26.964504      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:36:26.964559      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:36:26.964576      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:36:26.964765      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0295b6530, {CONNECTING <nil>}
    I0223 20:36:26.977167      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0295b6530, {READY <nil>}
    I0223 20:36:26.978704      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:36:43.085414      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:36:43.085470      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:36:43.085486      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:36:43.085744      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc00805e030, {CONNECTING <nil>}
    I0223 20:36:43.098298      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc00805e030, {READY <nil>}
    I0223 20:36:43.100608      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:36:46.295646      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:36:46.295693      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:36:46.295706      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:36:46.295964      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0118ec3c0, {CONNECTING <nil>}
    I0223 20:36:46.306106      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0118ec3c0, {READY <nil>}
    I0223 20:36:46.307185      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:36:46.891564      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:36:46.891607      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:36:46.891622      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:36:46.891707      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc00e7ed9f0, {CONNECTING <nil>}
    I0223 20:36:46.901745      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc00e7ed9f0, {READY <nil>}
    I0223 20:36:46.902793      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:37:11.684112      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:37:11.684156      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:37:11.684167      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:37:11.684455      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01dc0d1c0, {CONNECTING <nil>}
    I0223 20:37:11.700827      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01dc0d1c0, {READY <nil>}
    I0223 20:37:11.702461      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:37:16.402018      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:37:16.402070      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:37:16.402085      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:37:16.402461      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01fea52a0, {CONNECTING <nil>}
    I0223 20:37:16.417051      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01fea52a0, {READY <nil>}
    I0223 20:37:16.418428      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:37:18.228561      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:37:18.228660      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:37:18.228680      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:37:18.228872      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc021f12d60, {CONNECTING <nil>}
    I0223 20:37:18.242216      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc021f12d60, {READY <nil>}
    I0223 20:37:18.243631      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:37:24.810677      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:37:24.810743      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:37:24.810762      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:37:24.811360      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc025982dd0, {CONNECTING <nil>}
    I0223 20:37:24.826368      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc025982dd0, {READY <nil>}
    I0223 20:37:24.827433      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 20:37:33.164906      17 controller.go:116] loading OpenAPI spec for "v1.admission.work.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:37:33.164938      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.work.open-cluster-management.io: Rate Limited Requeue.
    E0223 20:37:33.180808      17 controller.go:116] loading OpenAPI spec for "v1beta1.webhook.certmanager.k8s.io" failed with: OpenAPI spec does not exist
    I0223 20:37:33.180840      17 controller.go:129] OpenAPI AggregationController: action for item v1beta1.webhook.certmanager.k8s.io: Rate Limited Requeue.
    E0223 20:37:33.193130      17 controller.go:116] loading OpenAPI spec for "v1.admission.hive.openshift.io" failed with: OpenAPI spec does not exist
    I0223 20:37:33.193160      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.hive.openshift.io: Rate Limited Requeue.
    E0223 20:37:33.210229      17 controller.go:116] loading OpenAPI spec for "v1.admission.cluster.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:37:33.210258      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.cluster.open-cluster-management.io: Rate Limited Requeue.
    I0223 20:37:52.783559      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:37:52.783709      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:37:52.783763      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:37:52.784150      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02c0154b0, {CONNECTING <nil>}
    I0223 20:37:52.798093      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02c0154b0, {READY <nil>}
    I0223 20:37:52.799525      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:38:01.105040      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:38:01.105086      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:38:01.105102      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:38:01.105421      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02cf1d410, {CONNECTING <nil>}
    I0223 20:38:01.118207      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02cf1d410, {READY <nil>}
    I0223 20:38:01.119725      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:38:01.276437      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:38:01.276492      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:38:01.276509      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:38:01.276803      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02a611d70, {CONNECTING <nil>}
    I0223 20:38:01.287164      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02a611d70, {READY <nil>}
    I0223 20:38:01.288344      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:38:07.978762      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:38:07.978810      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:38:07.978827      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:38:07.978925      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0358f3cd0, {CONNECTING <nil>}
    I0223 20:38:07.994632      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0358f3cd0, {READY <nil>}
    I0223 20:38:07.996418      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:38:35.139489      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:38:35.139549      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:38:35.139564      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:38:35.139859      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01ca906d0, {CONNECTING <nil>}
    I0223 20:38:35.153277      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01ca906d0, {READY <nil>}
    I0223 20:38:35.154773      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:38:36.212545      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:38:36.212621      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:38:36.212636      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:38:36.212866      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc016c7e660, {CONNECTING <nil>}
    I0223 20:38:36.226332      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc016c7e660, {READY <nil>}
    I0223 20:38:36.228032      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:38:37.136416      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:38:37.136466      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:38:37.136484      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:38:37.136575      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01cc9baa0, {CONNECTING <nil>}
    I0223 20:38:37.150517      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01cc9baa0, {READY <nil>}
    I0223 20:38:37.151430      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:38:47.632916      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:38:47.632965      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:38:47.633015      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:38:47.633093      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc00aa491a0, {CONNECTING <nil>}
    I0223 20:38:47.644097      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc00aa491a0, {READY <nil>}
    I0223 20:38:47.645186      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:38:51.545231      17 trace.go:205] Trace[1184859375]: "List" url:/apis/console.openshift.io/v1/consolequickstarts,user-agent:Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36 Edg/88.0.705.74,client:::1 (23-Feb-2021 20:38:50.117) (total time: 1427ms):
    Trace[1184859375]: ---"Writing http response done" count:11 1416ms (20:38:00.545)
    Trace[1184859375]: [1.427442228s] [1.427442228s] END
    I0223 20:39:09.342678      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:39:09.342725      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:39:09.342741      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:39:09.342948      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02b047080, {CONNECTING <nil>}
    I0223 20:39:09.355135      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02b047080, {READY <nil>}
    I0223 20:39:09.356758      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:39:09.905720      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:39:09.905783      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:39:09.905801      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:39:09.905898      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01d3d8c00, {CONNECTING <nil>}
    I0223 20:39:09.921266      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01d3d8c00, {READY <nil>}
    I0223 20:39:09.924744      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:39:17.533766      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:39:17.533829      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:39:17.533848      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:39:17.534106      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0126046c0, {CONNECTING <nil>}
    I0223 20:39:17.543548      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0126046c0, {READY <nil>}
    I0223 20:39:17.544838      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:39:18.558397      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:39:18.558470      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:39:18.558488      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:39:18.558854      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc020159ca0, {CONNECTING <nil>}
    I0223 20:39:18.570488      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc020159ca0, {READY <nil>}
    I0223 20:39:18.571686      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 20:39:33.145599      17 controller.go:116] loading OpenAPI spec for "v1.admission.work.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:39:33.145632      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.work.open-cluster-management.io: Rate Limited Requeue.
    E0223 20:39:33.178176      17 controller.go:116] loading OpenAPI spec for "v1beta1.webhook.certmanager.k8s.io" failed with: OpenAPI spec does not exist
    I0223 20:39:33.178219      17 controller.go:129] OpenAPI AggregationController: action for item v1beta1.webhook.certmanager.k8s.io: Rate Limited Requeue.
    E0223 20:39:33.196678      17 controller.go:116] loading OpenAPI spec for "v1.admission.hive.openshift.io" failed with: OpenAPI spec does not exist
    I0223 20:39:33.196719      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.hive.openshift.io: Rate Limited Requeue.
    E0223 20:39:33.215606      17 controller.go:116] loading OpenAPI spec for "v1.admission.cluster.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:39:33.215640      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.cluster.open-cluster-management.io: Rate Limited Requeue.
    I0223 20:39:33.815455      17 cacher.go:782] cacher (*core.Pod): 1 objects queued in incoming channel.
    I0223 20:39:33.815486      17 cacher.go:782] cacher (*core.Pod): 2 objects queued in incoming channel.
    E0223 20:39:50.321232      17 writers.go:107] apiserver was unable to write a JSON response: http: Handler timeout
    E0223 20:39:50.321441      17 status.go:71] apiserver received an error that is not an metav1.Status: &errors.errorString{s:"http: Handler timeout"}
    E0223 20:39:50.322557      17 writers.go:120] apiserver was unable to write a fallback JSON response: http: Handler timeout
    I0223 20:39:52.263464      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:39:52.263552      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:39:52.263567      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:39:52.263655      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02c6afc90, {CONNECTING <nil>}
    I0223 20:39:52.274876      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02c6afc90, {READY <nil>}
    I0223 20:39:52.275771      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:39:52.578122      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:39:52.578176      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:39:52.578193      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:39:52.578497      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02cf76750, {CONNECTING <nil>}
    I0223 20:39:52.591004      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02cf76750, {READY <nil>}
    I0223 20:39:52.592632      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:39:54.756286      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:39:54.756333      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:39:54.756344      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:39:54.756414      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc023625960, {CONNECTING <nil>}
    I0223 20:39:54.767808      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc023625960, {READY <nil>}
    I0223 20:39:54.769129      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:39:56.404294      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:39:56.404345      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:39:56.404361      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:39:56.404481      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc021f4dcb0, {CONNECTING <nil>}
    I0223 20:39:56.415138      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc021f4dcb0, {READY <nil>}
    I0223 20:39:56.416213      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 20:40:02.220022      17 writers.go:107] apiserver was unable to write a JSON response: http: Handler timeout
    E0223 20:40:02.220127      17 status.go:71] apiserver received an error that is not an metav1.Status: &errors.errorString{s:"http: Handler timeout"}
    E0223 20:40:02.221866      17 writers.go:120] apiserver was unable to write a fallback JSON response: http: Handler timeout
    I0223 20:40:25.339731      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:40:25.339789      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:40:25.339807      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:40:25.340129      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc015a709b0, {CONNECTING <nil>}
    I0223 20:40:25.353181      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc015a709b0, {READY <nil>}
    I0223 20:40:25.354655      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:40:30.462091      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:40:30.462135      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:40:30.462146      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:40:30.462230      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc016332960, {CONNECTING <nil>}
    I0223 20:40:30.472773      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc016332960, {READY <nil>}
    I0223 20:40:30.474206      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 20:40:31.243026      17 writers.go:107] apiserver was unable to write a JSON response: http: Handler timeout
    E0223 20:40:31.243150      17 status.go:71] apiserver received an error that is not an metav1.Status: &errors.errorString{s:"http: Handler timeout"}
    E0223 20:40:31.244166      17 writers.go:120] apiserver was unable to write a fallback JSON response: http: Handler timeout
    E0223 20:40:33.150787      17 controller.go:116] loading OpenAPI spec for "v1.admission.work.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:40:33.150819      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.work.open-cluster-management.io: Rate Limited Requeue.
    E0223 20:40:33.190190      17 controller.go:116] loading OpenAPI spec for "v1beta1.webhook.certmanager.k8s.io" failed with: OpenAPI spec does not exist
    I0223 20:40:33.190224      17 controller.go:129] OpenAPI AggregationController: action for item v1beta1.webhook.certmanager.k8s.io: Rate Limited Requeue.
    E0223 20:40:33.201566      17 controller.go:116] loading OpenAPI spec for "v1.admission.hive.openshift.io" failed with: OpenAPI spec does not exist
    I0223 20:40:33.201592      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.hive.openshift.io: Rate Limited Requeue.
    E0223 20:40:33.221136      17 controller.go:116] loading OpenAPI spec for "v1.admission.cluster.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:40:33.221163      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.cluster.open-cluster-management.io: Rate Limited Requeue.
    I0223 20:40:36.603974      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:40:36.604027      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:40:36.604042      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:40:36.604223      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02aa90b70, {CONNECTING <nil>}
    I0223 20:40:36.613458      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02aa90b70, {READY <nil>}
    I0223 20:40:36.614529      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:40:37.663227      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:40:37.663281      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:40:37.663296      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:40:37.663389      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc015fa35a0, {CONNECTING <nil>}
    I0223 20:40:37.676172      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc015fa35a0, {READY <nil>}
    I0223 20:40:37.677917      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 20:40:40.123848      17 writers.go:64] error encountered while streaming results via websocket: context canceled
    I0223 20:40:40.123959      17 trace.go:205] Trace[1418061176]: "Get" url:/api/v1/namespaces/openshift-kube-apiserver/pods/kube-apiserver-ip-10-0-171-12.ec2.internal/log,user-agent:Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36,client:76.182.85.204 (23-Feb-2021 20:13:49.846) (total time: 1610277ms):
    Trace[1418061176]: ---"Transformed response object" 1610268ms (20:40:00.123)
    Trace[1418061176]: [26m50.277491693s] [26m50.277491693s] END
    I0223 20:40:55.480563      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:40:55.480609      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:40:55.480622      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:40:55.480776      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc034f5a9d0, {CONNECTING <nil>}
    I0223 20:40:55.492561      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc034f5a9d0, {READY <nil>}
    I0223 20:40:55.493957      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:41:07.669817      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:41:07.669882      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:41:07.669898      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:41:07.670253      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02fd968b0, {CONNECTING <nil>}
    I0223 20:41:07.687811      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02fd968b0, {READY <nil>}
    I0223 20:41:07.692029      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:41:14.204908      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:41:14.204998      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:41:14.205013      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:41:14.205192      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02b4fefa0, {CONNECTING <nil>}
    I0223 20:41:14.214551      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02b4fefa0, {READY <nil>}
    I0223 20:41:14.219433      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:41:21.103101      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:41:21.103159      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:41:21.103176      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:41:21.103427      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0119dab10, {CONNECTING <nil>}
    I0223 20:41:21.123764      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0119dab10, {READY <nil>}
    I0223 20:41:21.132458      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:41:36.434348      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:41:36.434402      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:41:36.434421      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:41:36.434677      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc025e46df0, {CONNECTING <nil>}
    I0223 20:41:36.447480      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc025e46df0, {READY <nil>}
    I0223 20:41:36.449131      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:41:38.045560      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:41:38.045610      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:41:38.045622      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:41:38.045723      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0203be440, {CONNECTING <nil>}
    I0223 20:41:38.057884      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0203be440, {READY <nil>}
    I0223 20:41:38.060952      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:41:55.826056      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:41:55.826113      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:41:55.826130      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:41:55.826302      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02b40be90, {CONNECTING <nil>}
    I0223 20:41:55.838968      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02b40be90, {READY <nil>}
    I0223 20:41:55.840158      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:41:59.101506      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:41:59.101559      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:41:59.101576      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:41:59.101787      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02bed5930, {CONNECTING <nil>}
    I0223 20:41:59.110194      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02bed5930, {READY <nil>}
    I0223 20:41:59.111025      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:42:12.925131      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:42:12.925184      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:42:12.925233      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:42:12.925495      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02891ec50, {CONNECTING <nil>}
    I0223 20:42:12.934860      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02891ec50, {READY <nil>}
    I0223 20:42:12.935993      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:42:17.688496      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:42:17.688557      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:42:17.688569      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:42:17.688754      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc00b2c8ca0, {CONNECTING <nil>}
    I0223 20:42:17.700814      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc00b2c8ca0, {READY <nil>}
    I0223 20:42:17.702548      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:42:31.560490      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:42:31.560536      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:42:31.560547      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:42:31.560857      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01021ed60, {CONNECTING <nil>}
    I0223 20:42:31.577739      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01021ed60, {READY <nil>}
    I0223 20:42:31.579136      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 20:42:33.165446      17 controller.go:116] loading OpenAPI spec for "v1.admission.work.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:42:33.165473      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.work.open-cluster-management.io: Rate Limited Requeue.
    E0223 20:42:33.199165      17 controller.go:116] loading OpenAPI spec for "v1beta1.webhook.certmanager.k8s.io" failed with: OpenAPI spec does not exist
    I0223 20:42:33.199192      17 controller.go:129] OpenAPI AggregationController: action for item v1beta1.webhook.certmanager.k8s.io: Rate Limited Requeue.
    E0223 20:42:33.203090      17 controller.go:116] loading OpenAPI spec for "v1.admission.hive.openshift.io" failed with: OpenAPI spec does not exist
    I0223 20:42:33.203120      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.hive.openshift.io: Rate Limited Requeue.
    E0223 20:42:33.223717      17 controller.go:116] loading OpenAPI spec for "v1.admission.cluster.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:42:33.223742      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.cluster.open-cluster-management.io: Rate Limited Requeue.
    I0223 20:42:38.158825      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:42:38.158867      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:42:38.158879      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:42:38.159256      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc020087260, {CONNECTING <nil>}
    I0223 20:42:38.167802      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc020087260, {READY <nil>}
    I0223 20:42:38.168724      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:42:55.128431      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:42:55.128517      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:42:55.128536      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:42:55.128902      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02ba88b50, {CONNECTING <nil>}
    I0223 20:42:55.137442      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02ba88b50, {READY <nil>}
    I0223 20:42:55.138224      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:42:55.610417      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:42:55.610501      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:42:55.610521      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:42:55.610707      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02f514340, {CONNECTING <nil>}
    I0223 20:42:55.623176      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02f514340, {READY <nil>}
    I0223 20:42:55.624763      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:43:10.991584      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:43:10.991632      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:43:10.991648      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:43:10.992105      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01e8414f0, {CONNECTING <nil>}
    I0223 20:43:11.002497      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01e8414f0, {READY <nil>}
    I0223 20:43:11.003426      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:43:12.027793      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:43:12.027887      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:43:12.027905      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:43:12.028046      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02c706ec0, {CONNECTING <nil>}
    I0223 20:43:12.041994      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02c706ec0, {READY <nil>}
    I0223 20:43:12.043524      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:43:29.030181      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:43:29.030236      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:43:29.030251      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:43:29.030343      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc023b61d70, {CONNECTING <nil>}
    I0223 20:43:29.042043      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc023b61d70, {READY <nil>}
    I0223 20:43:29.043133      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:43:35.910273      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:43:35.910331      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:43:35.910348      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:43:35.910669      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02a874130, {CONNECTING <nil>}
    I0223 20:43:35.924414      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02a874130, {READY <nil>}
    I0223 20:43:35.926071      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:43:43.561251      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:43:43.561307      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:43:43.561323      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:43:43.561560      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc041ab4a20, {CONNECTING <nil>}
    I0223 20:43:43.581017      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc041ab4a20, {READY <nil>}
    I0223 20:43:43.595471      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:43:53.112749      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:43:53.112838      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:43:53.112856      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:43:53.112973      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc03430bbf0, {CONNECTING <nil>}
    I0223 20:43:53.122408      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc03430bbf0, {READY <nil>}
    I0223 20:43:53.123318      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:44:07.544317      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:44:07.544361      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:44:07.544377      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:44:07.544468      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0297f5870, {CONNECTING <nil>}
    I0223 20:44:07.557982      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0297f5870, {READY <nil>}
    I0223 20:44:07.561703      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:44:12.140421      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:44:12.140473      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:44:12.140489      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:44:12.140861      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01546ed00, {CONNECTING <nil>}
    I0223 20:44:12.154223      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01546ed00, {READY <nil>}
    I0223 20:44:12.155119      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 20:44:17.518283      17 status.go:71] apiserver received an error that is not an metav1.Status: &errors.errorString{s:"context canceled"}
    E0223 20:44:17.518341      17 writers.go:107] apiserver was unable to write a JSON response: http: Handler timeout
    E0223 20:44:17.519722      17 status.go:71] apiserver received an error that is not an metav1.Status: &errors.errorString{s:"http: Handler timeout"}
    E0223 20:44:17.520818      17 writers.go:120] apiserver was unable to write a fallback JSON response: http: Handler timeout
    I0223 20:44:22.731655      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:44:22.731716      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:44:22.731735      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:44:22.731979      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc005efe070, {CONNECTING <nil>}
    I0223 20:44:22.744255      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc005efe070, {READY <nil>}
    I0223 20:44:22.745639      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 20:44:32.875093      17 status.go:71] apiserver received an error that is not an metav1.Status: &errors.errorString{s:"context canceled"}
    E0223 20:44:32.875150      17 writers.go:107] apiserver was unable to write a JSON response: http: Handler timeout
    E0223 20:44:32.876439      17 status.go:71] apiserver received an error that is not an metav1.Status: &errors.errorString{s:"http: Handler timeout"}
    E0223 20:44:32.877680      17 writers.go:120] apiserver was unable to write a fallback JSON response: http: Handler timeout
    E0223 20:44:33.127814      17 controller.go:116] loading OpenAPI spec for "v1.admission.work.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:44:33.127845      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.work.open-cluster-management.io: Rate Limited Requeue.
    E0223 20:44:33.139047      17 controller.go:116] loading OpenAPI spec for "v1beta1.webhook.certmanager.k8s.io" failed with: OpenAPI spec does not exist
    I0223 20:44:33.139080      17 controller.go:129] OpenAPI AggregationController: action for item v1beta1.webhook.certmanager.k8s.io: Rate Limited Requeue.
    E0223 20:44:33.156963      17 controller.go:116] loading OpenAPI spec for "v1.admission.hive.openshift.io" failed with: OpenAPI spec does not exist
    I0223 20:44:33.156993      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.hive.openshift.io: Rate Limited Requeue.
    E0223 20:44:33.169003      17 controller.go:116] loading OpenAPI spec for "v1.admission.cluster.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:44:33.169032      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.cluster.open-cluster-management.io: Rate Limited Requeue.
    I0223 20:44:34.177027      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:44:34.177094      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:44:34.177112      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:44:34.177544      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc03507db50, {CONNECTING <nil>}
    I0223 20:44:34.197367      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc03507db50, {READY <nil>}
    I0223 20:44:34.199514      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:44:43.562672      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:44:43.562731      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:44:43.562746      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:44:43.562999      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02990b710, {CONNECTING <nil>}
    I0223 20:44:43.573317      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02990b710, {READY <nil>}
    I0223 20:44:43.574376      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:44:45.654942      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:44:45.655056      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:44:45.655077      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:44:45.655236      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02d8f8070, {CONNECTING <nil>}
    I0223 20:44:45.667221      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02d8f8070, {READY <nil>}
    I0223 20:44:45.668732      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:44:54.392684      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:44:54.392743      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:44:54.392760      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:44:54.392998      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0085985d0, {CONNECTING <nil>}
    I0223 20:44:54.412097      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0085985d0, {READY <nil>}
    I0223 20:44:54.414017      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:45:16.307641      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:45:16.307685      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:45:16.307700      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:45:16.307807      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01ed47000, {CONNECTING <nil>}
    I0223 20:45:16.317114      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01ed47000, {READY <nil>}
    I0223 20:45:16.317960      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:45:16.683975      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:45:16.684048      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:45:16.684064      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:45:16.684170      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01e1803f0, {CONNECTING <nil>}
    I0223 20:45:16.692978      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01e1803f0, {READY <nil>}
    I0223 20:45:16.693879      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:45:21.622624      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:45:21.622676      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:45:21.622687      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:45:21.622891      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01e11e570, {CONNECTING <nil>}
    I0223 20:45:21.638485      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01e11e570, {READY <nil>}
    I0223 20:45:21.639785      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:45:24.540032      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:45:24.540088      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:45:24.540105      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:45:24.540287      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01be2cda0, {CONNECTING <nil>}
    I0223 20:45:24.552803      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01be2cda0, {READY <nil>}
    I0223 20:45:24.554510      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 20:45:33.143276      17 controller.go:116] loading OpenAPI spec for "v1.admission.work.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:45:33.143314      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.work.open-cluster-management.io: Rate Limited Requeue.
    E0223 20:45:33.148635      17 controller.go:116] loading OpenAPI spec for "v1beta1.webhook.certmanager.k8s.io" failed with: OpenAPI spec does not exist
    I0223 20:45:33.148658      17 controller.go:129] OpenAPI AggregationController: action for item v1beta1.webhook.certmanager.k8s.io: Rate Limited Requeue.
    E0223 20:45:33.170395      17 controller.go:116] loading OpenAPI spec for "v1.admission.hive.openshift.io" failed with: OpenAPI spec does not exist
    I0223 20:45:33.170422      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.hive.openshift.io: Rate Limited Requeue.
    E0223 20:45:33.175335      17 controller.go:116] loading OpenAPI spec for "v1.admission.cluster.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:45:33.175370      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.cluster.open-cluster-management.io: Rate Limited Requeue.
    I0223 20:45:56.648222      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:45:56.648277      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:45:56.648295      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:45:56.648377      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02cd60e80, {CONNECTING <nil>}
    I0223 20:45:56.661227      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02cd60e80, {READY <nil>}
    I0223 20:45:56.662669      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:45:56.983781      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:45:56.983836      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:45:56.983854      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:45:56.984167      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02d0bb5b0, {CONNECTING <nil>}
    I0223 20:45:56.993131      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02d0bb5b0, {READY <nil>}
    I0223 20:45:56.994051      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:45:57.422785      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:45:57.422842      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:45:57.422859      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:45:57.423110      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02d0a2a00, {CONNECTING <nil>}
    I0223 20:45:57.432129      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02d0a2a00, {READY <nil>}
    I0223 20:45:57.433103      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 20:46:00.604615      17 writers.go:107] apiserver was unable to write a JSON response: http: Handler timeout
    E0223 20:46:00.604807      17 status.go:71] apiserver received an error that is not an metav1.Status: &errors.errorString{s:"http: Handler timeout"}
    E0223 20:46:00.606107      17 writers.go:120] apiserver was unable to write a fallback JSON response: http: Handler timeout
    I0223 20:46:04.373420      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:46:04.373483      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:46:04.373501      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:46:04.373863      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02274d4c0, {CONNECTING <nil>}
    I0223 20:46:04.388259      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02274d4c0, {READY <nil>}
    I0223 20:46:04.390158      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:46:38.202597      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:46:38.202654      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:46:38.202671      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:46:38.202952      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc013986960, {CONNECTING <nil>}
    I0223 20:46:38.216294      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc013986960, {READY <nil>}
    I0223 20:46:38.217940      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:46:41.496189      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:46:41.496248      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:46:41.496263      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:46:41.496352      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0151292d0, {CONNECTING <nil>}
    I0223 20:46:41.507757      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0151292d0, {READY <nil>}
    I0223 20:46:41.508696      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:46:41.638229      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:46:41.638282      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:46:41.638300      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:46:41.638511      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc015188d10, {CONNECTING <nil>}
    I0223 20:46:41.649116      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc015188d10, {READY <nil>}
    I0223 20:46:41.649991      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:46:43.322170      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:46:43.322260      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:46:43.322286      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:46:43.322415      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0153721f0, {CONNECTING <nil>}
    I0223 20:46:43.335190      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0153721f0, {READY <nil>}
    I0223 20:46:43.336499      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 20:46:48.127462      17 writers.go:107] apiserver was unable to write a JSON response: http: Handler timeout
    E0223 20:46:48.127570      17 status.go:71] apiserver received an error that is not an metav1.Status: &errors.errorString{s:"http: Handler timeout"}
    E0223 20:46:48.128524      17 writers.go:120] apiserver was unable to write a fallback JSON response: http: Handler timeout
    I0223 20:47:12.514844      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:47:12.514888      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:47:12.514900      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:47:12.515204      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc034d3f7a0, {CONNECTING <nil>}
    I0223 20:47:12.529567      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc034d3f7a0, {READY <nil>}
    I0223 20:47:12.531954      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:47:19.102771      17 controller.go:606] quota admission added evaluator for: roles.rbac.authorization.k8s.io
    I0223 20:47:19.109445      17 controller.go:606] quota admission added evaluator for: roles.rbac.authorization.k8s.io
    I0223 20:47:19.283065      17 client.go:360] parsed scheme: "endpoint"
    I0223 20:47:19.283113      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]
    I0223 20:47:19.299851      17 store.go:1376] Monitoring rolebindingrestrictions.authorization.openshift.io count at <storage-prefix>//authorization.openshift.io/rolebindingrestrictions
    I0223 20:47:19.305439      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized
    I0223 20:47:24.838775      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:47:24.838819      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:47:24.838833      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:47:24.838995      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02951ffd0, {CONNECTING <nil>}
    I0223 20:47:24.853325      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02951ffd0, {READY <nil>}
    I0223 20:47:24.854711      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:47:25.253815      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:47:25.253865      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:47:25.253875      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:47:25.254256      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0130327a0, {CONNECTING <nil>}
    I0223 20:47:25.263457      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0130327a0, {READY <nil>}
    I0223 20:47:25.264261      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:47:26.319575      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:47:26.319618      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:47:26.319633      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:47:26.319797      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc015ac0190, {CONNECTING <nil>}
    I0223 20:47:26.329434      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc015ac0190, {READY <nil>}
    I0223 20:47:26.330325      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 20:47:33.161998      17 controller.go:116] loading OpenAPI spec for "v1.admission.work.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:47:33.162034      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.work.open-cluster-management.io: Rate Limited Requeue.
    E0223 20:47:33.171961      17 controller.go:116] loading OpenAPI spec for "v1beta1.webhook.certmanager.k8s.io" failed with: OpenAPI spec does not exist
    I0223 20:47:33.172075      17 controller.go:129] OpenAPI AggregationController: action for item v1beta1.webhook.certmanager.k8s.io: Rate Limited Requeue.
    E0223 20:47:33.181069      17 controller.go:116] loading OpenAPI spec for "v1.admission.hive.openshift.io" failed with: OpenAPI spec does not exist
    I0223 20:47:33.181146      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.hive.openshift.io: Rate Limited Requeue.
    E0223 20:47:33.194394      17 controller.go:116] loading OpenAPI spec for "v1.admission.cluster.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:47:33.194501      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.cluster.open-cluster-management.io: Rate Limited Requeue.
    I0223 20:47:48.067033      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:47:48.067090      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:47:48.067109      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:47:48.067328      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01dc6ee10, {CONNECTING <nil>}
    I0223 20:47:48.080711      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01dc6ee10, {READY <nil>}
    I0223 20:47:48.082230      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:48:04.160961      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:48:04.161077      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:48:04.161098      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:48:04.161640      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02dc8e200, {CONNECTING <nil>}
    I0223 20:48:04.173131      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02dc8e200, {READY <nil>}
    I0223 20:48:04.174274      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:48:06.097752      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:48:06.097810      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:48:06.097825      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:48:06.098262      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02de9a1d0, {CONNECTING <nil>}
    I0223 20:48:06.109492      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02de9a1d0, {READY <nil>}
    I0223 20:48:06.110632      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:48:06.710073      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:48:06.710120      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:48:06.710131      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:48:06.710397      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01aa0f4b0, {CONNECTING <nil>}
    I0223 20:48:06.722490      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01aa0f4b0, {READY <nil>}
    I0223 20:48:06.723982      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:48:33.076770      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:48:33.076817      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:48:33.076834      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:48:33.076984      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0223e5900, {CONNECTING <nil>}
    I0223 20:48:33.087945      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0223e5900, {READY <nil>}
    I0223 20:48:33.089426      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 20:48:40.597484      17 writers.go:107] apiserver was unable to write a JSON response: http: Handler timeout
    E0223 20:48:40.597654      17 status.go:71] apiserver received an error that is not an metav1.Status: &errors.errorString{s:"http: Handler timeout"}
    E0223 20:48:40.598812      17 writers.go:120] apiserver was unable to write a fallback JSON response: http: Handler timeout
    I0223 20:48:41.803603      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:48:41.803647      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:48:41.803663      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:48:41.804043      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc015149aa0, {CONNECTING <nil>}
    I0223 20:48:41.813580      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc015149aa0, {READY <nil>}
    I0223 20:48:41.814646      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:48:47.986164      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:48:47.986221      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:48:47.986237      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:48:47.986528      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01fccc220, {CONNECTING <nil>}
    I0223 20:48:48.003177      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01fccc220, {READY <nil>}
    I0223 20:48:48.008794      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:48:48.531057      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:48:48.531108      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:48:48.531125      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:48:48.531361      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc035803a60, {CONNECTING <nil>}
    I0223 20:48:48.543147      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc035803a60, {READY <nil>}
    I0223 20:48:48.544567      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:49:16.776424      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:49:16.776478      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:49:16.776523      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:49:16.776778      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc016ef51b0, {CONNECTING <nil>}
    I0223 20:49:16.789344      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc016ef51b0, {READY <nil>}
    I0223 20:49:16.790658      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:49:25.099321      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:49:25.099377      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:49:25.099434      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:49:25.099547      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01dc0c220, {CONNECTING <nil>}
    I0223 20:49:25.108815      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01dc0c220, {READY <nil>}
    I0223 20:49:25.109699      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:49:30.689810      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:49:30.689867      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:49:30.689884      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:49:30.690151      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01c4d1fb0, {CONNECTING <nil>}
    I0223 20:49:30.701280      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01c4d1fb0, {READY <nil>}
    I0223 20:49:30.702226      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:49:32.353274      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:49:32.353356      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:49:32.353375      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:49:32.353639      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc023a45030, {CONNECTING <nil>}
    I0223 20:49:32.364738      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc023a45030, {READY <nil>}
    I0223 20:49:32.366118      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 20:49:33.135780      17 controller.go:116] loading OpenAPI spec for "v1.admission.work.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:49:33.135814      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.work.open-cluster-management.io: Rate Limited Requeue.
    E0223 20:49:33.161407      17 controller.go:116] loading OpenAPI spec for "v1beta1.webhook.certmanager.k8s.io" failed with: OpenAPI spec does not exist
    I0223 20:49:33.161475      17 controller.go:129] OpenAPI AggregationController: action for item v1beta1.webhook.certmanager.k8s.io: Rate Limited Requeue.
    E0223 20:49:33.178158      17 controller.go:116] loading OpenAPI spec for "v1.admission.hive.openshift.io" failed with: OpenAPI spec does not exist
    I0223 20:49:33.178313      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.hive.openshift.io: Rate Limited Requeue.
    E0223 20:49:33.200654      17 controller.go:116] loading OpenAPI spec for "v1.admission.cluster.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:49:33.201580      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.cluster.open-cluster-management.io: Rate Limited Requeue.
    I0223 20:50:00.130147      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:50:00.130206      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:50:00.130221      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:50:00.130406      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0156e69c0, {CONNECTING <nil>}
    I0223 20:50:00.144220      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0156e69c0, {READY <nil>}
    I0223 20:50:00.145704      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:50:01.075451      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:50:01.075506      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:50:01.075521      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:50:01.075771      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02ba89920, {CONNECTING <nil>}
    I0223 20:50:01.084747      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02ba89920, {READY <nil>}
    I0223 20:50:01.085699      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 20:50:02.675152      17 writers.go:107] apiserver was unable to write a JSON response: http: Handler timeout
    E0223 20:50:02.675257      17 status.go:71] apiserver received an error that is not an metav1.Status: &errors.errorString{s:"http: Handler timeout"}
    E0223 20:50:02.676509      17 writers.go:120] apiserver was unable to write a fallback JSON response: http: Handler timeout
    I0223 20:50:08.422010      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:50:08.422068      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:50:08.422198      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:50:08.422333      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02b7d4460, {CONNECTING <nil>}
    I0223 20:50:08.434103      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02b7d4460, {READY <nil>}
    I0223 20:50:08.435508      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:50:12.344081      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:50:12.344124      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:50:12.344137      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:50:12.344250      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02ae83a40, {CONNECTING <nil>}
    I0223 20:50:12.354151      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02ae83a40, {READY <nil>}
    I0223 20:50:12.354969      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 20:50:33.143200      17 controller.go:116] loading OpenAPI spec for "v1.admission.work.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:50:33.143231      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.work.open-cluster-management.io: Rate Limited Requeue.
    E0223 20:50:33.166982      17 controller.go:116] loading OpenAPI spec for "v1beta1.webhook.certmanager.k8s.io" failed with: OpenAPI spec does not exist
    I0223 20:50:33.167006      17 controller.go:129] OpenAPI AggregationController: action for item v1beta1.webhook.certmanager.k8s.io: Rate Limited Requeue.
    E0223 20:50:33.193102      17 controller.go:116] loading OpenAPI spec for "v1.admission.hive.openshift.io" failed with: OpenAPI spec does not exist
    I0223 20:50:33.193130      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.hive.openshift.io: Rate Limited Requeue.
    E0223 20:50:33.216531      17 controller.go:116] loading OpenAPI spec for "v1.admission.cluster.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:50:33.216558      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.cluster.open-cluster-management.io: Rate Limited Requeue.
    I0223 20:50:42.759669      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:50:42.759902      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:50:42.760088      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:50:42.760345      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02c0a9b90, {CONNECTING <nil>}
    I0223 20:50:42.773632      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02c0a9b90, {READY <nil>}
    I0223 20:50:42.775410      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:50:46.068453      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:50:46.068512      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:50:46.068569      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:50:46.068641      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0266cf030, {CONNECTING <nil>}
    I0223 20:50:46.081496      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0266cf030, {READY <nil>}
    I0223 20:50:46.083984      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:50:52.701466      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:50:52.701523      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:50:52.701540      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:50:52.701840      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0121b7130, {CONNECTING <nil>}
    I0223 20:50:52.715977      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0121b7130, {READY <nil>}
    I0223 20:50:52.718156      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:50:53.311040      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:50:53.311140      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:50:53.311160      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:50:53.311317      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc00f3ff170, {CONNECTING <nil>}
    I0223 20:50:53.320596      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc00f3ff170, {READY <nil>}
    I0223 20:50:53.322356      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:51:24.888409      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:51:24.888469      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:51:24.888502      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:51:24.888775      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02fb33b20, {CONNECTING <nil>}
    I0223 20:51:24.900449      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02fb33b20, {READY <nil>}
    I0223 20:51:24.901896      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:51:26.011862      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:51:26.011954      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:51:26.011973      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:51:26.012245      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02fbb9760, {CONNECTING <nil>}
    I0223 20:51:26.021458      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02fbb9760, {READY <nil>}
    I0223 20:51:26.022425      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:51:26.109933      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:51:26.110070      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:51:26.110121      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:51:26.110455      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02fc33a10, {CONNECTING <nil>}
    I0223 20:51:26.131475      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02fc33a10, {READY <nil>}
    I0223 20:51:26.133110      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:51:30.910033      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:51:30.910087      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:51:30.910102      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:51:30.910216      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0300e0e30, {CONNECTING <nil>}
    I0223 20:51:30.919647      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0300e0e30, {READY <nil>}
    I0223 20:51:30.920676      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:51:31.978482      17 trace.go:205] Trace[2015023171]: "List" url:/apis/console.openshift.io/v1/consolequickstarts,user-agent:Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36 Edg/88.0.705.74,client:::1 (23-Feb-2021 20:51:31.390) (total time: 587ms):
    Trace[2015023171]: ---"Writing http response done" count:11 578ms (20:51:00.978)
    Trace[2015023171]: [587.639649ms] [587.639649ms] END
    I0223 20:51:56.147949      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:51:56.148004      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:51:56.148020      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:51:56.148192      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02cde6660, {CONNECTING <nil>}
    I0223 20:51:56.159721      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02cde6660, {READY <nil>}
    I0223 20:51:56.160867      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:51:57.502854      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:51:57.502908      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:51:57.502959      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:51:57.503121      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0201312f0, {CONNECTING <nil>}
    I0223 20:51:57.522625      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0201312f0, {READY <nil>}
    I0223 20:51:57.526002      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:52:06.172487      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:52:06.172532      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:52:06.172546      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:52:06.172696      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc03514a2f0, {CONNECTING <nil>}
    I0223 20:52:06.182502      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc03514a2f0, {READY <nil>}
    I0223 20:52:06.183794      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:52:10.388500      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:52:10.388555      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:52:10.388591      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:52:10.388742      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc029890ef0, {CONNECTING <nil>}
    I0223 20:52:10.398371      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc029890ef0, {READY <nil>}
    I0223 20:52:10.399231      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 20:52:20.377182      17 writers.go:107] apiserver was unable to write a JSON response: http: Handler timeout
    E0223 20:52:20.377276      17 status.go:71] apiserver received an error that is not an metav1.Status: &errors.errorString{s:"http: Handler timeout"}
    E0223 20:52:20.378388      17 writers.go:120] apiserver was unable to write a fallback JSON response: http: Handler timeout
    I0223 20:52:28.382220      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:52:28.382277      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:52:28.382307      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:52:28.382445      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc00996b6a0, {CONNECTING <nil>}
    I0223 20:52:28.395093      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc00996b6a0, {READY <nil>}
    I0223 20:52:28.396389      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 20:52:33.157096      17 controller.go:116] loading OpenAPI spec for "v1.admission.work.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:52:33.157123      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.work.open-cluster-management.io: Rate Limited Requeue.
    E0223 20:52:33.177624      17 controller.go:116] loading OpenAPI spec for "v1beta1.webhook.certmanager.k8s.io" failed with: OpenAPI spec does not exist
    I0223 20:52:33.177653      17 controller.go:129] OpenAPI AggregationController: action for item v1beta1.webhook.certmanager.k8s.io: Rate Limited Requeue.
    E0223 20:52:33.198637      17 controller.go:116] loading OpenAPI spec for "v1.admission.hive.openshift.io" failed with: OpenAPI spec does not exist
    I0223 20:52:33.198661      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.hive.openshift.io: Rate Limited Requeue.
    E0223 20:52:33.228820      17 controller.go:116] loading OpenAPI spec for "v1.admission.cluster.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:52:33.228853      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.cluster.open-cluster-management.io: Rate Limited Requeue.
    I0223 20:52:36.539762      17 cacher.go:782] cacher (*core.ConfigMap): 7 objects queued in incoming channel.
    I0223 20:52:36.539796      17 cacher.go:782] cacher (*core.ConfigMap): 8 objects queued in incoming channel.
    I0223 20:52:36.539815      17 cacher.go:782] cacher (*core.ConfigMap): 9 objects queued in incoming channel.
    I0223 20:52:36.539825      17 cacher.go:782] cacher (*core.ConfigMap): 10 objects queued in incoming channel.
    I0223 20:52:42.221832      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:52:42.221888      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:52:42.221904      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:52:42.222051      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc07006c7f0, {CONNECTING <nil>}
    I0223 20:52:42.233205      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc07006c7f0, {READY <nil>}
    I0223 20:52:42.234554      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:52:45.821230      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:52:45.821290      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:52:45.821307      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:52:45.821462      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc014183620, {CONNECTING <nil>}
    I0223 20:52:45.830618      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc014183620, {READY <nil>}
    I0223 20:52:45.831481      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:52:48.036241      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:52:48.036294      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:52:48.036309      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:52:48.036546      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0148cffc0, {CONNECTING <nil>}
    I0223 20:52:48.047562      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0148cffc0, {READY <nil>}
    I0223 20:52:48.049543      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:53:01.408708      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:53:01.408753      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:53:01.408766      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:53:01.409104      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01fc60030, {CONNECTING <nil>}
    I0223 20:53:01.420287      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01fc60030, {READY <nil>}
    I0223 20:53:01.421548      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 20:53:02.705039      17 writers.go:107] apiserver was unable to write a JSON response: http: Handler timeout
    E0223 20:53:02.705137      17 status.go:71] apiserver received an error that is not an metav1.Status: &errors.errorString{s:"http: Handler timeout"}
    E0223 20:53:02.706110      17 writers.go:120] apiserver was unable to write a fallback JSON response: http: Handler timeout
    I0223 20:53:16.028055      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:53:16.028107      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:53:16.028124      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:53:16.028387      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0203a0bb0, {CONNECTING <nil>}
    I0223 20:53:16.038227      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0203a0bb0, {READY <nil>}
    I0223 20:53:16.039165      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:53:26.326861      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:53:26.327127      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:53:26.327264      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:53:26.327693      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02fafa050, {CONNECTING <nil>}
    I0223 20:53:26.342632      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02fafa050, {READY <nil>}
    I0223 20:53:26.346389      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:53:32.664976      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:53:32.665037      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:53:32.665054      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:53:32.665196      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0301d4060, {CONNECTING <nil>}
    I0223 20:53:32.677979      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0301d4060, {READY <nil>}
    I0223 20:53:32.678953      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:53:34.923387      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:53:34.923446      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:53:34.923484      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:53:34.923718      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc028f11af0, {CONNECTING <nil>}
    I0223 20:53:34.936034      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc028f11af0, {READY <nil>}
    I0223 20:53:34.937295      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:53:47.054890      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:53:47.054970      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:53:47.054987      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:53:47.055231      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01580ae60, {CONNECTING <nil>}
    I0223 20:53:47.064789      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01580ae60, {READY <nil>}
    I0223 20:53:47.066079      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:54:04.611266      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:54:04.611312      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:54:04.611328      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:54:04.611530      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02b276260, {CONNECTING <nil>}
    I0223 20:54:04.621766      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02b276260, {READY <nil>}
    I0223 20:54:04.622651      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:54:10.994488      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:54:10.994586      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:54:10.994608      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:54:10.994968      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc034d2e1a0, {CONNECTING <nil>}
    I0223 20:54:11.007094      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc034d2e1a0, {READY <nil>}
    I0223 20:54:11.008532      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:54:15.098591      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:54:15.098654      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:54:15.098672      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:54:15.098762      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02917e000, {CONNECTING <nil>}
    I0223 20:54:15.111314      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02917e000, {READY <nil>}
    I0223 20:54:15.119994      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:54:25.404747      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:54:25.404802      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:54:25.404818      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:54:25.404902      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc029ca1450, {CONNECTING <nil>}
    I0223 20:54:25.414947      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc029ca1450, {READY <nil>}
    I0223 20:54:25.415814      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 20:54:33.133589      17 controller.go:116] loading OpenAPI spec for "v1.admission.work.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:54:33.133626      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.work.open-cluster-management.io: Rate Limited Requeue.
    E0223 20:54:33.147706      17 controller.go:116] loading OpenAPI spec for "v1beta1.webhook.certmanager.k8s.io" failed with: OpenAPI spec does not exist
    I0223 20:54:33.147735      17 controller.go:129] OpenAPI AggregationController: action for item v1beta1.webhook.certmanager.k8s.io: Rate Limited Requeue.
    E0223 20:54:33.164727      17 controller.go:116] loading OpenAPI spec for "v1.admission.hive.openshift.io" failed with: OpenAPI spec does not exist
    I0223 20:54:33.164749      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.hive.openshift.io: Rate Limited Requeue.
    E0223 20:54:33.180695      17 controller.go:116] loading OpenAPI spec for "v1.admission.cluster.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:54:33.180891      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.cluster.open-cluster-management.io: Rate Limited Requeue.
    E0223 20:54:41.910661      17 status.go:71] apiserver received an error that is not an metav1.Status: &errors.errorString{s:"context canceled"}
    E0223 20:54:41.910839      17 writers.go:107] apiserver was unable to write a JSON response: http: Handler timeout
    E0223 20:54:41.911962      17 status.go:71] apiserver received an error that is not an metav1.Status: &errors.errorString{s:"http: Handler timeout"}
    E0223 20:54:41.913244      17 writers.go:120] apiserver was unable to write a fallback JSON response: http: Handler timeout
    I0223 20:54:46.848800      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:54:46.848853      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:54:46.848867      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:54:46.849173      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc045caefd0, {CONNECTING <nil>}
    I0223 20:54:46.861029      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc045caefd0, {READY <nil>}
    I0223 20:54:46.862811      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:54:49.462197      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:54:49.462252      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:54:49.462269      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:54:49.462355      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc045633a30, {CONNECTING <nil>}
    I0223 20:54:49.472117      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc045633a30, {READY <nil>}
    I0223 20:54:49.473474      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:54:53.215228      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:54:53.215295      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:54:53.215311      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:54:53.215426      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01095b400, {CONNECTING <nil>}
    I0223 20:54:53.227056      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01095b400, {READY <nil>}
    I0223 20:54:53.228442      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:55:05.462467      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:55:05.462538      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:55:05.462550      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:55:05.462705      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0073825e0, {CONNECTING <nil>}
    I0223 20:55:05.472563      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0073825e0, {READY <nil>}
    I0223 20:55:05.473764      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:55:24.507141      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:55:24.507186      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:55:24.507202      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:55:24.507271      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc027f44c90, {CONNECTING <nil>}
    I0223 20:55:24.523572      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc027f44c90, {READY <nil>}
    I0223 20:55:24.525387      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:55:29.830268      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:55:29.830324      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:55:29.830341      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:55:29.830746      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01485aa30, {CONNECTING <nil>}
    I0223 20:55:29.841489      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01485aa30, {READY <nil>}
    I0223 20:55:29.842416      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 20:55:33.138632      17 controller.go:116] loading OpenAPI spec for "v1.admission.work.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:55:33.138669      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.work.open-cluster-management.io: Rate Limited Requeue.
    E0223 20:55:33.162570      17 controller.go:116] loading OpenAPI spec for "v1beta1.webhook.certmanager.k8s.io" failed with: OpenAPI spec does not exist
    I0223 20:55:33.162599      17 controller.go:129] OpenAPI AggregationController: action for item v1beta1.webhook.certmanager.k8s.io: Rate Limited Requeue.
    E0223 20:55:33.170932      17 controller.go:116] loading OpenAPI spec for "v1.admission.hive.openshift.io" failed with: OpenAPI spec does not exist
    I0223 20:55:33.170964      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.hive.openshift.io: Rate Limited Requeue.
    E0223 20:55:33.195364      17 controller.go:116] loading OpenAPI spec for "v1.admission.cluster.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:55:33.195390      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.cluster.open-cluster-management.io: Rate Limited Requeue.
    I0223 20:55:33.670033      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:55:33.670076      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:55:33.670087      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:55:33.670360      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02d4bf940, {CONNECTING <nil>}
    I0223 20:55:33.680745      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02d4bf940, {READY <nil>}
    I0223 20:55:33.682259      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:55:47.925831      17 trace.go:205] Trace[1745199532]: "List etcd3" key:/operators.coreos.com/clusterserviceversions,resourceVersion:,resourceVersionMatch:,limit:250,continue: (23-Feb-2021 20:55:46.799) (total time: 1126ms):
    Trace[1745199532]: [1.12663036s] [1.12663036s] END
    I0223 20:55:48.313986      17 trace.go:205] Trace[817688681]: "List" url:/apis/operators.coreos.com/v1alpha1/clusterserviceversions,user-agent:Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36,client:::1 (23-Feb-2021 20:55:46.799) (total time: 1514ms):
    Trace[817688681]: ---"Listing from storage done" 1127ms (20:55:00.926)
    Trace[817688681]: ---"Writing http response done" count:189 387ms (20:55:00.313)
    Trace[817688681]: [1.514897016s] [1.514897016s] END
    I0223 20:55:49.899641      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:55:49.899687      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:55:49.899699      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:55:49.900024      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0125964f0, {CONNECTING <nil>}
    I0223 20:55:49.908818      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0125964f0, {READY <nil>}
    I0223 20:55:49.909640      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:56:06.745902      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:56:06.745958      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:56:06.745973      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:56:06.746463      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01485af80, {CONNECTING <nil>}
    I0223 20:56:06.763573      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01485af80, {READY <nil>}
    I0223 20:56:06.767425      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:56:08.522410      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:56:08.522455      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:56:08.522466      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:56:08.522551      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02c97cf20, {CONNECTING <nil>}
    I0223 20:56:08.536751      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02c97cf20, {READY <nil>}
    I0223 20:56:08.539037      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:56:11.079607      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:56:11.079650      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:56:11.079661      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:56:11.079845      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc04f7973e0, {CONNECTING <nil>}
    I0223 20:56:11.091179      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc04f7973e0, {READY <nil>}
    I0223 20:56:11.092882      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:56:27.495642      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:56:27.495695      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:56:27.495711      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:56:27.496001      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc03430f2a0, {CONNECTING <nil>}
    I0223 20:56:27.508763      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc03430f2a0, {READY <nil>}
    I0223 20:56:27.510388      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:56:47.853307      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:56:47.853360      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:56:47.853375      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:56:47.853571      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc013c82a80, {CONNECTING <nil>}
    I0223 20:56:47.873466      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc013c82a80, {READY <nil>}
    I0223 20:56:47.875013      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:56:49.059261      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:56:49.059312      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:56:49.059327      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:56:49.059581      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc014a97ec0, {CONNECTING <nil>}
    I0223 20:56:49.068009      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc014a97ec0, {READY <nil>}
    I0223 20:56:49.068947      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:56:55.975977      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:56:55.976033      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:56:55.976047      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:56:55.976153      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc028ef1c30, {CONNECTING <nil>}
    I0223 20:56:55.988528      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc028ef1c30, {READY <nil>}
    I0223 20:56:55.989940      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:57:04.807640      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:57:04.807697      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:57:04.807715      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:57:04.807985      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0315b0d00, {CONNECTING <nil>}
    I0223 20:57:04.817189      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0315b0d00, {READY <nil>}
    I0223 20:57:04.818180      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:57:24.009584      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:57:24.009642      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:57:24.009658      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:57:24.009784      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02fa4a870, {CONNECTING <nil>}
    I0223 20:57:24.018776      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02fa4a870, {READY <nil>}
    I0223 20:57:24.019736      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:57:31.208512      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:57:31.208583      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:57:31.208603      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:57:31.209598      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0303d3d30, {CONNECTING <nil>}
    I0223 20:57:31.220208      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0303d3d30, {READY <nil>}
    I0223 20:57:31.221665      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 20:57:33.149561      17 controller.go:116] loading OpenAPI spec for "v1.admission.work.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:57:33.149595      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.work.open-cluster-management.io: Rate Limited Requeue.
    E0223 20:57:33.171958      17 controller.go:116] loading OpenAPI spec for "v1beta1.webhook.certmanager.k8s.io" failed with: OpenAPI spec does not exist
    I0223 20:57:33.171991      17 controller.go:129] OpenAPI AggregationController: action for item v1beta1.webhook.certmanager.k8s.io: Rate Limited Requeue.
    E0223 20:57:33.185050      17 controller.go:116] loading OpenAPI spec for "v1.admission.hive.openshift.io" failed with: OpenAPI spec does not exist
    I0223 20:57:33.185075      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.hive.openshift.io: Rate Limited Requeue.
    E0223 20:57:33.200998      17 controller.go:116] loading OpenAPI spec for "v1.admission.cluster.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:57:33.201063      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.cluster.open-cluster-management.io: Rate Limited Requeue.
    I0223 20:57:38.077202      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:57:38.077258      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:57:38.077276      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:57:38.077393      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0138bbcf0, {CONNECTING <nil>}
    I0223 20:57:38.090368      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0138bbcf0, {READY <nil>}
    I0223 20:57:38.091867      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:57:45.424150      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:57:45.424193      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:57:45.424204      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:57:45.424283      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc015766020, {CONNECTING <nil>}
    I0223 20:57:45.439607      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc015766020, {READY <nil>}
    I0223 20:57:45.441138      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:57:54.498709      17 trace.go:205] Trace[299378945]: "List etcd3" key:/operators.coreos.com/clusterserviceversions,resourceVersion:,resourceVersionMatch:,limit:250,continue: (23-Feb-2021 20:57:53.872) (total time: 626ms):
    Trace[299378945]: [626.125226ms] [626.125226ms] END
    I0223 20:57:54.538773      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:57:54.538833      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:57:54.538849      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:57:54.539024      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc00d4cf440, {CONNECTING <nil>}
    I0223 20:57:54.548469      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc00d4cf440, {READY <nil>}
    I0223 20:57:54.549462      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:57:57.774040      17 trace.go:205] Trace[893063468]: "List" url:/apis/operators.coreos.com/v1alpha1/clusterserviceversions,user-agent:Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36,client:::1 (23-Feb-2021 20:57:53.872) (total time: 3901ms):
    Trace[893063468]: ---"Listing from storage done" 627ms (20:57:00.499)
    Trace[893063468]: ---"Writing http response done" count:189 3274ms (20:57:00.773)
    Trace[893063468]: [3.901511293s] [3.901511293s] END
    I0223 20:58:13.868875      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:58:13.868977      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:58:13.868998      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:58:13.869240      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc031609460, {CONNECTING <nil>}
    I0223 20:58:13.880684      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc031609460, {READY <nil>}
    I0223 20:58:13.881971      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:58:19.976102      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:58:19.976152      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:58:19.976184      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:58:19.976459      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc015f006e0, {CONNECTING <nil>}
    I0223 20:58:19.989173      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc015f006e0, {READY <nil>}
    I0223 20:58:19.990899      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:58:29.666324      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:58:29.666386      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:58:29.666401      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:58:29.666620      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02fbb8720, {CONNECTING <nil>}
    I0223 20:58:29.677687      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02fbb8720, {READY <nil>}
    I0223 20:58:29.678442      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 20:58:32.617009      17 status.go:71] apiserver received an error that is not an metav1.Status: &errors.errorString{s:"context canceled"}
    E0223 20:58:32.617073      17 writers.go:107] apiserver was unable to write a JSON response: http: Handler timeout
    E0223 20:58:32.618343      17 status.go:71] apiserver received an error that is not an metav1.Status: &errors.errorString{s:"http: Handler timeout"}
    E0223 20:58:32.619328      17 writers.go:120] apiserver was unable to write a fallback JSON response: http: Handler timeout
    I0223 20:58:33.923615      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:58:33.923673      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:58:33.923689      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:58:33.923802      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc030021ec0, {CONNECTING <nil>}
    I0223 20:58:33.933365      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc030021ec0, {READY <nil>}
    I0223 20:58:33.934331      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:58:53.765294      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:58:53.765341      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:58:53.765352      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:58:53.765495      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02730ad10, {CONNECTING <nil>}
    I0223 20:58:53.778849      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02730ad10, {READY <nil>}
    I0223 20:58:53.780316      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:59:02.242823      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:59:02.242875      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:59:02.242887      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:59:02.243007      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc03584f780, {CONNECTING <nil>}
    I0223 20:59:02.254549      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc03584f780, {READY <nil>}
    I0223 20:59:02.256310      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:59:09.427861      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:59:09.427953      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:59:09.427973      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:59:09.428147      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc034270050, {CONNECTING <nil>}
    I0223 20:59:09.437494      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc034270050, {READY <nil>}
    I0223 20:59:09.438336      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:59:11.592651      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:59:11.592701      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:59:11.592716      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:59:11.592858      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0348aa3e0, {CONNECTING <nil>}
    I0223 20:59:11.601687      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0348aa3e0, {READY <nil>}
    I0223 20:59:11.602560      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 20:59:33.139778      17 controller.go:116] loading OpenAPI spec for "v1beta1.webhook.certmanager.k8s.io" failed with: OpenAPI spec does not exist
    I0223 20:59:33.139818      17 controller.go:129] OpenAPI AggregationController: action for item v1beta1.webhook.certmanager.k8s.io: Rate Limited Requeue.
    E0223 20:59:33.181179      17 controller.go:116] loading OpenAPI spec for "v1.admission.hive.openshift.io" failed with: OpenAPI spec does not exist
    I0223 20:59:33.181607      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.hive.openshift.io: Rate Limited Requeue.
    E0223 20:59:33.209743      17 controller.go:116] loading OpenAPI spec for "v1.admission.cluster.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:59:33.209793      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.cluster.open-cluster-management.io: Rate Limited Requeue.
    E0223 20:59:33.227711      17 controller.go:116] loading OpenAPI spec for "v1.admission.work.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 20:59:33.227748      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.work.open-cluster-management.io: Rate Limited Requeue.
    I0223 20:59:36.670024      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:59:36.670068      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:59:36.670079      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:59:36.670175      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc011aba810, {CONNECTING <nil>}
    I0223 20:59:36.684466      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc011aba810, {READY <nil>}
    I0223 20:59:36.685978      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:59:38.572340      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:59:38.572392      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:59:38.572408      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:59:38.572633      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc015ccb400, {CONNECTING <nil>}
    I0223 20:59:38.586853      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc015ccb400, {READY <nil>}
    I0223 20:59:38.588996      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 20:59:40.393782      17 writers.go:107] apiserver was unable to write a JSON response: http: Handler timeout
    E0223 20:59:40.393915      17 status.go:71] apiserver received an error that is not an metav1.Status: &errors.errorString{s:"http: Handler timeout"}
    E0223 20:59:40.395025      17 writers.go:120] apiserver was unable to write a fallback JSON response: http: Handler timeout
    I0223 20:59:45.374500      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:59:45.374551      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:59:45.374563      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:59:45.374679      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc015fd83d0, {CONNECTING <nil>}
    I0223 20:59:45.383380      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc015fd83d0, {READY <nil>}
    I0223 20:59:45.385059      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 20:59:47.279848      17 client.go:360] parsed scheme: "passthrough"
    I0223 20:59:47.279902      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 20:59:47.279919      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 20:59:47.280079      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc012467b60, {CONNECTING <nil>}
    I0223 20:59:47.289122      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc012467b60, {READY <nil>}
    I0223 20:59:47.290121      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:00:10.581422      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:00:10.581478      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:00:10.581495      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:00:10.581815      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01ff4e930, {CONNECTING <nil>}
    I0223 21:00:10.593812      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01ff4e930, {READY <nil>}
    I0223 21:00:10.595580      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:00:11.852376      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:00:11.852429      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:00:11.852443      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:00:11.852707      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02bb5d240, {CONNECTING <nil>}
    I0223 21:00:11.864462      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02bb5d240, {READY <nil>}
    I0223 21:00:11.865804      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:00:23.268787      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:00:23.268833      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:00:23.268849      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:00:23.268964      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02ba35ae0, {CONNECTING <nil>}
    I0223 21:00:23.278282      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02ba35ae0, {READY <nil>}
    I0223 21:00:23.279111      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:00:29.985885      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:00:29.985973      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:00:29.985988      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:00:29.986206      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02c350710, {CONNECTING <nil>}
    I0223 21:00:29.999262      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02c350710, {READY <nil>}
    I0223 21:00:30.000287      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 21:00:33.145100      17 controller.go:116] loading OpenAPI spec for "v1beta1.webhook.certmanager.k8s.io" failed with: OpenAPI spec does not exist
    I0223 21:00:33.145127      17 controller.go:129] OpenAPI AggregationController: action for item v1beta1.webhook.certmanager.k8s.io: Rate Limited Requeue.
    E0223 21:00:33.195274      17 controller.go:116] loading OpenAPI spec for "v1.admission.hive.openshift.io" failed with: OpenAPI spec does not exist
    I0223 21:00:33.195316      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.hive.openshift.io: Rate Limited Requeue.
    E0223 21:00:33.214723      17 controller.go:116] loading OpenAPI spec for "v1.admission.cluster.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 21:00:33.214749      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.cluster.open-cluster-management.io: Rate Limited Requeue.
    E0223 21:00:33.242627      17 controller.go:116] loading OpenAPI spec for "v1.admission.work.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 21:00:33.242652      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.work.open-cluster-management.io: Rate Limited Requeue.
    I0223 21:00:46.572857      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:00:46.572950      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:00:46.572970      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:00:46.573099      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02422f8b0, {CONNECTING <nil>}
    I0223 21:00:46.586751      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02422f8b0, {READY <nil>}
    I0223 21:00:46.588254      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 21:00:48.281654      17 wrap.go:54] timeout or abort while handling: POST "/api/v1/namespaces/josh/events"
    I0223 21:00:51.413204      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:00:51.413260      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:00:51.413276      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:00:51.413535      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02c105ba0, {CONNECTING <nil>}
    I0223 21:00:51.425566      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02c105ba0, {READY <nil>}
    I0223 21:00:51.427182      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:00:55.779190      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:00:55.779233      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:00:55.779246      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:00:55.779401      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc014a6f9d0, {CONNECTING <nil>}
    I0223 21:00:55.788567      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc014a6f9d0, {READY <nil>}
    I0223 21:00:55.792642      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:01:10.095213      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:01:10.095273      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:01:10.095290      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:01:10.095694      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc03bb99a40, {CONNECTING <nil>}
    I0223 21:01:10.105098      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc03bb99a40, {READY <nil>}
    I0223 21:01:10.105744      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:01:19.925012      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:01:19.925057      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:01:19.925072      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:01:19.925309      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc017e3b570, {CONNECTING <nil>}
    I0223 21:01:19.938970      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc017e3b570, {READY <nil>}
    I0223 21:01:19.940780      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:01:26.979241      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:01:26.979303      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:01:26.979315      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:01:26.979595      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0255aa7c0, {CONNECTING <nil>}
    I0223 21:01:26.991343      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0255aa7c0, {READY <nil>}
    I0223 21:01:26.992838      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:01:38.801287      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:01:38.801347      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:01:38.801364      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:01:38.801522      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc035280340, {CONNECTING <nil>}
    I0223 21:01:38.815274      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc035280340, {READY <nil>}
    I0223 21:01:38.816699      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:01:47.544109      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:01:47.544156      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:01:47.544174      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:01:47.544437      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0315b1ca0, {CONNECTING <nil>}
    I0223 21:01:47.555262      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0315b1ca0, {READY <nil>}
    I0223 21:01:47.556258      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:01:53.870236      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:01:53.870284      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:01:53.870300      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:01:53.870527      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02f8107b0, {CONNECTING <nil>}
    I0223 21:01:53.882099      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02f8107b0, {READY <nil>}
    I0223 21:01:53.883593      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 21:02:02.362658      17 writers.go:107] apiserver was unable to write a JSON response: http: Handler timeout
    E0223 21:02:02.362758      17 status.go:71] apiserver received an error that is not an metav1.Status: &errors.errorString{s:"http: Handler timeout"}
    E0223 21:02:02.363912      17 writers.go:120] apiserver was unable to write a fallback JSON response: http: Handler timeout
    E0223 21:02:06.323845      17 status.go:71] apiserver received an error that is not an metav1.Status: &errors.errorString{s:"context canceled"}
    E0223 21:02:06.323900      17 writers.go:107] apiserver was unable to write a JSON response: http: Handler timeout
    E0223 21:02:06.325117      17 status.go:71] apiserver received an error that is not an metav1.Status: &errors.errorString{s:"http: Handler timeout"}
    E0223 21:02:06.326229      17 writers.go:120] apiserver was unable to write a fallback JSON response: http: Handler timeout
    I0223 21:02:07.770918      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:02:07.770969      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:02:07.771031      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:02:07.771245      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0354b9900, {CONNECTING <nil>}
    I0223 21:02:07.784597      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0354b9900, {READY <nil>}
    I0223 21:02:07.786455      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:02:18.478449      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:02:18.478504      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:02:18.478536      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:02:18.478615      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02d5f0460, {CONNECTING <nil>}
    I0223 21:02:18.493769      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02d5f0460, {READY <nil>}
    I0223 21:02:18.494742      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:02:23.390101      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:02:23.390157      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:02:23.390173      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:02:23.390350      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0415757a0, {CONNECTING <nil>}
    I0223 21:02:23.400461      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0415757a0, {READY <nil>}
    I0223 21:02:23.401419      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:02:30.005432      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:02:30.005481      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:02:30.005497      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:02:30.005590      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc035883ed0, {CONNECTING <nil>}
    I0223 21:02:30.017189      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc035883ed0, {READY <nil>}
    I0223 21:02:30.018598      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 21:02:33.157223      17 controller.go:116] loading OpenAPI spec for "v1beta1.webhook.certmanager.k8s.io" failed with: OpenAPI spec does not exist
    I0223 21:02:33.157257      17 controller.go:129] OpenAPI AggregationController: action for item v1beta1.webhook.certmanager.k8s.io: Rate Limited Requeue.
    E0223 21:02:33.205588      17 controller.go:116] loading OpenAPI spec for "v1.admission.hive.openshift.io" failed with: OpenAPI spec does not exist
    I0223 21:02:33.205620      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.hive.openshift.io: Rate Limited Requeue.
    E0223 21:02:33.223841      17 controller.go:116] loading OpenAPI spec for "v1.admission.cluster.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 21:02:33.223876      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.cluster.open-cluster-management.io: Rate Limited Requeue.
    E0223 21:02:33.252215      17 controller.go:116] loading OpenAPI spec for "v1.admission.work.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 21:02:33.252245      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.work.open-cluster-management.io: Rate Limited Requeue.
    I0223 21:02:43.269530      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:02:43.269586      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:02:43.269602      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:02:43.270020      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc034869d60, {CONNECTING <nil>}
    I0223 21:02:43.286628      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc034869d60, {READY <nil>}
    I0223 21:02:43.288161      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:03:00.614156      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:03:00.614216      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:03:00.614229      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:03:00.614465      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc00b3d9930, {CONNECTING <nil>}
    I0223 21:03:00.624842      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc00b3d9930, {READY <nil>}
    I0223 21:03:00.625725      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:03:03.053675      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:03:03.053744      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:03:03.053762      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:03:03.053833      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc009ea3960, {CONNECTING <nil>}
    I0223 21:03:03.067367      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc009ea3960, {READY <nil>}
    I0223 21:03:03.068256      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:03:03.227592      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:03:03.227638      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:03:03.227654      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:03:03.227840      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01c565330, {CONNECTING <nil>}
    I0223 21:03:03.239308      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01c565330, {READY <nil>}
    I0223 21:03:03.241365      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:03:16.591906      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:03:16.592007      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:03:16.592026      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:03:16.592251      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc012466a80, {CONNECTING <nil>}
    I0223 21:03:16.605002      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc012466a80, {READY <nil>}
    I0223 21:03:16.606981      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:03:33.962775      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:03:33.962820      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:03:33.962853      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:03:33.963085      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc03168c790, {CONNECTING <nil>}
    I0223 21:03:33.973659      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc03168c790, {READY <nil>}
    I0223 21:03:33.974543      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:03:37.440805      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:03:37.440885      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:03:37.440903      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:03:37.441390      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc034fd8ea0, {CONNECTING <nil>}
    I0223 21:03:37.454414      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc034fd8ea0, {READY <nil>}
    I0223 21:03:37.455412      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:03:39.056364      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:03:39.056424      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:03:39.056441      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:03:39.056536      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0315c9e10, {CONNECTING <nil>}
    I0223 21:03:39.069984      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0315c9e10, {READY <nil>}
    I0223 21:03:39.071582      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:04:00.726109      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:04:00.726167      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:04:00.726182      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:04:00.726407      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02f0fbc10, {CONNECTING <nil>}
    I0223 21:04:00.742540      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02f0fbc10, {READY <nil>}
    I0223 21:04:00.744968      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:04:08.623092      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:04:08.623149      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:04:08.623166      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:04:08.623376      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc032d94810, {CONNECTING <nil>}
    I0223 21:04:08.632011      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc032d94810, {READY <nil>}
    I0223 21:04:08.633373      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:04:12.523623      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:04:12.523666      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:04:12.523676      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:04:12.523763      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc023ce03f0, {CONNECTING <nil>}
    I0223 21:04:12.536439      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc023ce03f0, {READY <nil>}
    I0223 21:04:12.537976      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:04:13.599273      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:04:13.599326      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:04:13.599342      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:04:13.599568      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc03430b560, {CONNECTING <nil>}
    I0223 21:04:13.609162      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc03430b560, {READY <nil>}
    I0223 21:04:13.610184      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 21:04:33.142564      17 controller.go:116] loading OpenAPI spec for "v1.admission.work.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 21:04:33.142609      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.work.open-cluster-management.io: Rate Limited Requeue.
    E0223 21:04:33.159469      17 controller.go:116] loading OpenAPI spec for "v1beta1.webhook.certmanager.k8s.io" failed with: OpenAPI spec does not exist
    I0223 21:04:33.159505      17 controller.go:129] OpenAPI AggregationController: action for item v1beta1.webhook.certmanager.k8s.io: Rate Limited Requeue.
    E0223 21:04:33.178203      17 controller.go:116] loading OpenAPI spec for "v1.admission.hive.openshift.io" failed with: OpenAPI spec does not exist
    I0223 21:04:33.178237      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.hive.openshift.io: Rate Limited Requeue.
    E0223 21:04:33.194471      17 controller.go:116] loading OpenAPI spec for "v1.admission.cluster.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 21:04:33.194507      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.cluster.open-cluster-management.io: Rate Limited Requeue.
    I0223 21:04:41.892563      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:04:41.892606      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:04:41.892616      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:04:41.892698      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc012533b10, {CONNECTING <nil>}
    I0223 21:04:41.905664      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc012533b10, {READY <nil>}
    I0223 21:04:41.907115      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:04:50.163438      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:04:50.163484      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:04:50.163495      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:04:50.163767      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0241ead30, {CONNECTING <nil>}
    I0223 21:04:50.175023      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0241ead30, {READY <nil>}
    I0223 21:04:50.176845      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:04:50.937585      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:04:50.937638      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:04:50.937654      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:04:50.937794      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc026f55d40, {CONNECTING <nil>}
    I0223 21:04:50.949348      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc026f55d40, {READY <nil>}
    I0223 21:04:50.950733      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:04:55.267409      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:04:55.267466      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:04:55.267483      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:04:55.267863      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc027f44d30, {CONNECTING <nil>}
    I0223 21:04:55.277246      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc027f44d30, {READY <nil>}
    I0223 21:04:55.278202      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 21:05:03.200396      17 writers.go:107] apiserver was unable to write a JSON response: http: Handler timeout
    E0223 21:05:03.200521      17 status.go:71] apiserver received an error that is not an metav1.Status: &errors.errorString{s:"http: Handler timeout"}
    E0223 21:05:03.201473      17 writers.go:120] apiserver was unable to write a fallback JSON response: http: Handler timeout
    E0223 21:05:10.725056      17 writers.go:107] apiserver was unable to write a JSON response: http: Handler timeout
    E0223 21:05:10.725153      17 status.go:71] apiserver received an error that is not an metav1.Status: &errors.errorString{s:"http: Handler timeout"}
    E0223 21:05:10.726997      17 writers.go:120] apiserver was unable to write a fallback JSON response: http: Handler timeout
    I0223 21:05:12.011125      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:05:12.011175      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:05:12.011192      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:05:12.011456      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc04f796890, {CONNECTING <nil>}
    I0223 21:05:12.024868      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc04f796890, {READY <nil>}
    I0223 21:05:12.026659      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:05:26.196390      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:05:26.196441      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:05:26.196457      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:05:26.196637      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc015ffb300, {CONNECTING <nil>}
    I0223 21:05:26.208362      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc015ffb300, {READY <nil>}
    I0223 21:05:26.209868      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:05:30.378500      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:05:30.378555      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:05:30.378584      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:05:30.379037      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc03b64e4a0, {CONNECTING <nil>}
    I0223 21:05:30.388416      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc03b64e4a0, {READY <nil>}
    I0223 21:05:30.389386      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 21:05:33.159276      17 controller.go:116] loading OpenAPI spec for "v1.admission.work.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 21:05:33.159311      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.work.open-cluster-management.io: Rate Limited Requeue.
    E0223 21:05:33.172207      17 controller.go:116] loading OpenAPI spec for "v1beta1.webhook.certmanager.k8s.io" failed with: OpenAPI spec does not exist
    I0223 21:05:33.172240      17 controller.go:129] OpenAPI AggregationController: action for item v1beta1.webhook.certmanager.k8s.io: Rate Limited Requeue.
    E0223 21:05:33.183813      17 controller.go:116] loading OpenAPI spec for "v1.admission.hive.openshift.io" failed with: OpenAPI spec does not exist
    I0223 21:05:33.183839      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.hive.openshift.io: Rate Limited Requeue.
    E0223 21:05:33.208408      17 controller.go:116] loading OpenAPI spec for "v1.admission.cluster.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 21:05:33.208431      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.cluster.open-cluster-management.io: Rate Limited Requeue.
    I0223 21:05:38.711800      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:05:38.711895      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:05:38.711915      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:05:38.712309      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01e012800, {CONNECTING <nil>}
    I0223 21:05:38.724569      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01e012800, {READY <nil>}
    I0223 21:05:38.725572      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:05:43.986274      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:05:43.986330      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:05:43.986350      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:05:43.986449      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01f26b710, {CONNECTING <nil>}
    I0223 21:05:44.001303      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01f26b710, {READY <nil>}
    I0223 21:05:44.004466      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:06:06.860539      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:06:06.860594      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:06:06.860610      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:06:06.860741      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc032372140, {CONNECTING <nil>}
    I0223 21:06:06.870333      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc032372140, {READY <nil>}
    I0223 21:06:06.871687      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 21:06:07.104928      17 status.go:71] apiserver received an error that is not an metav1.Status: &errors.errorString{s:"context canceled"}
    E0223 21:06:07.105345      17 writers.go:107] apiserver was unable to write a JSON response: http: Handler timeout
    E0223 21:06:07.106472      17 status.go:71] apiserver received an error that is not an metav1.Status: &errors.errorString{s:"http: Handler timeout"}
    E0223 21:06:07.107849      17 writers.go:120] apiserver was unable to write a fallback JSON response: http: Handler timeout
    I0223 21:06:10.969070      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:06:10.969126      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:06:10.969143      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:06:10.969353      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc030540a90, {CONNECTING <nil>}
    I0223 21:06:10.981406      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc030540a90, {READY <nil>}
    I0223 21:06:10.983061      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:06:18.912754      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:06:18.912815      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:06:18.912833      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:06:18.913092      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02f896110, {CONNECTING <nil>}
    I0223 21:06:18.922632      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02f896110, {READY <nil>}
    I0223 21:06:18.923547      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:06:21.576907      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:06:21.576965      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:06:21.577015      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:06:21.577142      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02fad9ec0, {CONNECTING <nil>}
    I0223 21:06:21.589788      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02fad9ec0, {READY <nil>}
    I0223 21:06:21.594016      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:06:46.430058      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:06:46.430136      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:06:46.430154      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:06:46.430479      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc041f6da90, {CONNECTING <nil>}
    I0223 21:06:46.439664      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc041f6da90, {READY <nil>}
    I0223 21:06:46.440551      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:06:49.032520      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:06:49.032565      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:06:49.032576      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:06:49.032669      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc014e80290, {CONNECTING <nil>}
    I0223 21:06:49.043094      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc014e80290, {READY <nil>}
    I0223 21:06:49.044608      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:06:55.707119      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:06:55.707163      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:06:55.707174      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:06:55.707438      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0341a6170, {CONNECTING <nil>}
    I0223 21:06:55.719636      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0341a6170, {READY <nil>}
    I0223 21:06:55.722238      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:07:01.358358      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:07:01.358402      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:07:01.358413      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:07:01.358487      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0154f9260, {CONNECTING <nil>}
    I0223 21:07:01.371794      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0154f9260, {READY <nil>}
    I0223 21:07:01.373489      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 21:07:21.131802      17 writers.go:107] apiserver was unable to write a JSON response: http: Handler timeout
    E0223 21:07:21.131941      17 status.go:71] apiserver received an error that is not an metav1.Status: &errors.errorString{s:"http: Handler timeout"}
    E0223 21:07:21.133013      17 writers.go:120] apiserver was unable to write a fallback JSON response: http: Handler timeout
    I0223 21:07:26.204604      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:07:26.204666      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:07:26.204697      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:07:26.204967      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc00e23cac0, {CONNECTING <nil>}
    I0223 21:07:26.214799      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc00e23cac0, {READY <nil>}
    I0223 21:07:26.215981      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:07:27.175612      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:07:27.175721      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:07:27.175767      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:07:27.176123      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc00b47f620, {CONNECTING <nil>}
    I0223 21:07:27.187284      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc00b47f620, {READY <nil>}
    I0223 21:07:27.188803      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:07:28.157724      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:07:28.157784      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:07:28.157802      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:07:28.158231      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc00a664560, {CONNECTING <nil>}
    I0223 21:07:28.168018      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc00a664560, {READY <nil>}
    I0223 21:07:28.168927      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:07:32.717637      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:07:32.717684      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:07:32.717715      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:07:32.717889      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0119f4f80, {CONNECTING <nil>}
    I0223 21:07:32.732707      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0119f4f80, {READY <nil>}
    I0223 21:07:32.734107      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 21:07:33.177874      17 controller.go:116] loading OpenAPI spec for "v1.admission.work.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 21:07:33.177952      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.work.open-cluster-management.io: Rate Limited Requeue.
    E0223 21:07:33.187838      17 controller.go:116] loading OpenAPI spec for "v1beta1.webhook.certmanager.k8s.io" failed with: OpenAPI spec does not exist
    I0223 21:07:33.187859      17 controller.go:129] OpenAPI AggregationController: action for item v1beta1.webhook.certmanager.k8s.io: Rate Limited Requeue.
    E0223 21:07:33.202132      17 controller.go:116] loading OpenAPI spec for "v1.admission.hive.openshift.io" failed with: OpenAPI spec does not exist
    I0223 21:07:33.202160      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.hive.openshift.io: Rate Limited Requeue.
    E0223 21:07:33.221777      17 controller.go:116] loading OpenAPI spec for "v1.admission.cluster.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 21:07:33.221798      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.cluster.open-cluster-management.io: Rate Limited Requeue.
    I0223 21:08:05.046037      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:08:05.046088      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:08:05.046100      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:08:05.046359      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01c3bc4d0, {CONNECTING <nil>}
    I0223 21:08:05.060064      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01c3bc4d0, {READY <nil>}
    I0223 21:08:05.061469      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:08:06.670689      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:08:06.670734      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:08:06.670749      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:08:06.671040      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01c510990, {CONNECTING <nil>}
    I0223 21:08:06.681035      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01c510990, {READY <nil>}
    I0223 21:08:06.682031      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:08:11.605848      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:08:11.605890      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:08:11.605904      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:08:11.606236      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc028a8cd40, {CONNECTING <nil>}
    I0223 21:08:11.615064      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc028a8cd40, {READY <nil>}
    I0223 21:08:11.615868      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:08:12.296642      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:08:12.296753      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:08:12.296770      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:08:12.297120      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc031b14a10, {CONNECTING <nil>}
    I0223 21:08:12.308608      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc031b14a10, {READY <nil>}
    I0223 21:08:12.310118      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 21:08:23.483080      17 writers.go:107] apiserver was unable to write a JSON response: http: Handler timeout
    E0223 21:08:23.483293      17 status.go:71] apiserver received an error that is not an metav1.Status: &errors.errorString{s:"http: Handler timeout"}
    E0223 21:08:23.484280      17 writers.go:120] apiserver was unable to write a fallback JSON response: http: Handler timeout
    I0223 21:08:37.602338      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:08:37.602392      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:08:37.602407      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:08:37.602716      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc013981fa0, {CONNECTING <nil>}
    I0223 21:08:37.613867      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc013981fa0, {READY <nil>}
    I0223 21:08:37.615313      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:08:43.929841      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:08:43.929884      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:08:43.929901      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:08:43.930068      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0151717c0, {CONNECTING <nil>}
    I0223 21:08:43.942163      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0151717c0, {READY <nil>}
    I0223 21:08:43.943652      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:08:46.497978      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:08:46.498028      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:08:46.498046      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:08:46.498274      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc040823700, {CONNECTING <nil>}
    I0223 21:08:46.507932      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc040823700, {READY <nil>}
    I0223 21:08:46.508964      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:08:47.088343      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:08:47.088385      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:08:47.088396      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:08:47.088787      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0404f56d0, {CONNECTING <nil>}
    I0223 21:08:47.100069      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0404f56d0, {READY <nil>}
    I0223 21:08:47.101264      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:09:11.358995      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:09:11.359086      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:09:11.359103      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:09:11.359311      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0170676f0, {CONNECTING <nil>}
    I0223 21:09:11.381244      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0170676f0, {READY <nil>}
    I0223 21:09:11.389746      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:09:16.514191      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:09:16.514340      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:09:16.514408      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:09:16.514678      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01eb93fe0, {CONNECTING <nil>}
    I0223 21:09:16.526879      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01eb93fe0, {READY <nil>}
    I0223 21:09:16.528106      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:09:22.418594      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:09:22.418640      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:09:22.418651      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:09:22.418938      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0226efbe0, {CONNECTING <nil>}
    I0223 21:09:22.427662      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0226efbe0, {READY <nil>}
    I0223 21:09:22.429038      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:09:30.755966      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:09:30.756016      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:09:30.756028      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:09:30.756143      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0285f22b0, {CONNECTING <nil>}
    I0223 21:09:30.767783      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0285f22b0, {READY <nil>}
    I0223 21:09:30.768729      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 21:09:33.160341      17 controller.go:116] loading OpenAPI spec for "v1.admission.work.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 21:09:33.160387      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.work.open-cluster-management.io: Rate Limited Requeue.
    E0223 21:09:33.173315      17 controller.go:116] loading OpenAPI spec for "v1beta1.webhook.certmanager.k8s.io" failed with: OpenAPI spec does not exist
    I0223 21:09:33.173342      17 controller.go:129] OpenAPI AggregationController: action for item v1beta1.webhook.certmanager.k8s.io: Rate Limited Requeue.
    E0223 21:09:33.192109      17 controller.go:116] loading OpenAPI spec for "v1.admission.hive.openshift.io" failed with: OpenAPI spec does not exist
    I0223 21:09:33.192146      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.hive.openshift.io: Rate Limited Requeue.
    E0223 21:09:33.211207      17 controller.go:116] loading OpenAPI spec for "v1.admission.cluster.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 21:09:33.211231      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.cluster.open-cluster-management.io: Rate Limited Requeue.
    I0223 21:09:49.892266      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:09:49.892315      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:09:49.892331      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:09:49.892487      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc017a28440, {CONNECTING <nil>}
    I0223 21:09:49.904872      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc017a28440, {READY <nil>}
    I0223 21:09:49.906307      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:09:50.377489      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:09:50.377531      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:09:50.377542      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:09:50.377627      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc017f0f890, {CONNECTING <nil>}
    I0223 21:09:50.389327      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc017f0f890, {READY <nil>}
    I0223 21:09:50.390715      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:10:02.959041      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:10:02.959083      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:10:02.959098      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:10:02.959259      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01e927050, {CONNECTING <nil>}
    I0223 21:10:02.969976      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01e927050, {READY <nil>}
    I0223 21:10:02.970965      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:10:05.509245      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:10:05.509290      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:10:05.509306      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:10:05.509551      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01ef26060, {CONNECTING <nil>}
    I0223 21:10:05.518527      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01ef26060, {READY <nil>}
    I0223 21:10:05.519555      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:10:22.600348      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:10:22.600394      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:10:22.600405      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:10:22.600483      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0232fa3b0, {CONNECTING <nil>}
    I0223 21:10:22.613170      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0232fa3b0, {READY <nil>}
    I0223 21:10:22.614618      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:10:27.544766      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:10:27.544825      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:10:27.544841      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:10:27.544952      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0190b1630, {CONNECTING <nil>}
    I0223 21:10:27.567457      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0190b1630, {READY <nil>}
    I0223 21:10:27.568819      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 21:10:33.167608      17 controller.go:116] loading OpenAPI spec for "v1.admission.work.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 21:10:33.167633      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.work.open-cluster-management.io: Rate Limited Requeue.
    E0223 21:10:33.178218      17 controller.go:116] loading OpenAPI spec for "v1beta1.webhook.certmanager.k8s.io" failed with: OpenAPI spec does not exist
    I0223 21:10:33.178247      17 controller.go:129] OpenAPI AggregationController: action for item v1beta1.webhook.certmanager.k8s.io: Rate Limited Requeue.
    E0223 21:10:33.199393      17 controller.go:116] loading OpenAPI spec for "v1.admission.hive.openshift.io" failed with: OpenAPI spec does not exist
    I0223 21:10:33.199421      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.hive.openshift.io: Rate Limited Requeue.
    E0223 21:10:33.229489      17 controller.go:116] loading OpenAPI spec for "v1.admission.cluster.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 21:10:33.229517      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.cluster.open-cluster-management.io: Rate Limited Requeue.
    I0223 21:10:37.445561      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:10:37.445607      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:10:37.445618      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:10:37.445775      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02c3bf450, {CONNECTING <nil>}
    I0223 21:10:37.455608      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02c3bf450, {READY <nil>}
    I0223 21:10:37.456562      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:10:38.379012      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:10:38.379057      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:10:38.379070      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:10:38.379213      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02016df80, {CONNECTING <nil>}
    I0223 21:10:38.388396      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02016df80, {READY <nil>}
    I0223 21:10:38.389244      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 21:10:41.255323      17 status.go:71] apiserver received an error that is not an metav1.Status: &errors.errorString{s:"context canceled"}
    E0223 21:10:41.255442      17 writers.go:107] apiserver was unable to write a JSON response: http: Handler timeout
    E0223 21:10:41.257068      17 status.go:71] apiserver received an error that is not an metav1.Status: &errors.errorString{s:"http: Handler timeout"}
    E0223 21:10:41.258139      17 writers.go:120] apiserver was unable to write a fallback JSON response: http: Handler timeout
    I0223 21:11:05.423021      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:11:05.423176      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:11:05.423240      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:11:05.423750      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0356386e0, {CONNECTING <nil>}
    I0223 21:11:05.437633      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0356386e0, {READY <nil>}
    I0223 21:11:05.440203      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:11:07.523097      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:11:07.523186      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:11:07.523206      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:11:07.523549      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc030541c40, {CONNECTING <nil>}
    I0223 21:11:07.535529      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc030541c40, {READY <nil>}
    I0223 21:11:07.536922      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:11:07.622956      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:11:07.623015      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:11:07.623032      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:11:07.623544      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc015cc29d0, {CONNECTING <nil>}
    I0223 21:11:07.632421      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc015cc29d0, {READY <nil>}
    I0223 21:11:07.633197      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:11:20.477464      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:11:20.477533      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:11:20.477547      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:11:20.477934      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02fefe720, {CONNECTING <nil>}
    I0223 21:11:20.487499      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02fefe720, {READY <nil>}
    I0223 21:11:20.488413      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:11:37.097027      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:11:37.097258      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:11:37.097384      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:11:37.097667      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01563aa10, {CONNECTING <nil>}
    I0223 21:11:37.113119      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01563aa10, {READY <nil>}
    I0223 21:11:37.115160      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:11:40.451772      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:11:40.451822      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:11:40.451833      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:11:40.451916      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01580b0f0, {CONNECTING <nil>}
    I0223 21:11:40.465425      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01580b0f0, {READY <nil>}
    I0223 21:11:40.466107      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:11:50.428717      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:11:50.428764      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:11:50.428842      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:11:50.428922      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02b32e900, {CONNECTING <nil>}
    I0223 21:11:50.440303      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02b32e900, {READY <nil>}
    I0223 21:11:50.442363      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:12:00.616802      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:12:00.616851      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:12:00.616870      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:12:00.617095      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc03482bf60, {CONNECTING <nil>}
    I0223 21:12:00.626823      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc03482bf60, {READY <nil>}
    I0223 21:12:00.627798      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:12:15.431867      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:12:15.431920      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:12:15.431936      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:12:15.432081      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0410740d0, {CONNECTING <nil>}
    I0223 21:12:15.446340      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0410740d0, {READY <nil>}
    I0223 21:12:15.448009      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:12:23.523528      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:12:23.523585      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:12:23.523603      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:12:23.523759      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc00a7c2f20, {CONNECTING <nil>}
    I0223 21:12:23.533664      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc00a7c2f20, {READY <nil>}
    I0223 21:12:23.534944      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:12:31.994296      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:12:31.994339      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:12:31.994350      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:12:31.994605      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc009037340, {CONNECTING <nil>}
    I0223 21:12:32.006810      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc009037340, {READY <nil>}
    I0223 21:12:32.008533      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 21:12:33.180513      17 controller.go:116] loading OpenAPI spec for "v1.admission.work.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 21:12:33.180544      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.work.open-cluster-management.io: Rate Limited Requeue.
    E0223 21:12:33.190380      17 controller.go:116] loading OpenAPI spec for "v1beta1.webhook.certmanager.k8s.io" failed with: OpenAPI spec does not exist
    I0223 21:12:33.190417      17 controller.go:129] OpenAPI AggregationController: action for item v1beta1.webhook.certmanager.k8s.io: Rate Limited Requeue.
    E0223 21:12:33.209568      17 controller.go:116] loading OpenAPI spec for "v1.admission.hive.openshift.io" failed with: OpenAPI spec does not exist
    I0223 21:12:33.209598      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.hive.openshift.io: Rate Limited Requeue.
    E0223 21:12:33.250325      17 controller.go:116] loading OpenAPI spec for "v1.admission.cluster.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 21:12:33.250349      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.cluster.open-cluster-management.io: Rate Limited Requeue.
    I0223 21:12:35.515795      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:12:35.515849      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:12:35.515868      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:12:35.515987      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc021f6bd50, {CONNECTING <nil>}
    I0223 21:12:35.525891      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc021f6bd50, {READY <nil>}
    I0223 21:12:35.526876      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:12:56.731024      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:12:56.731083      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:12:56.731100      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:12:56.731365      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc026221e50, {CONNECTING <nil>}
    I0223 21:12:56.743590      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc026221e50, {READY <nil>}
    I0223 21:12:56.745539      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 21:12:58.022560      17 status.go:71] apiserver received an error that is not an metav1.Status: &errors.errorString{s:"context canceled"}
    E0223 21:12:58.022624      17 writers.go:107] apiserver was unable to write a JSON response: http: Handler timeout
    E0223 21:12:58.024487      17 status.go:71] apiserver received an error that is not an metav1.Status: &errors.errorString{s:"http: Handler timeout"}
    E0223 21:12:58.025616      17 writers.go:120] apiserver was unable to write a fallback JSON response: http: Handler timeout
    I0223 21:13:06.358596      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:13:06.358645      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:13:06.358656      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:13:06.358735      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01a8ed6f0, {CONNECTING <nil>}
    I0223 21:13:06.368148      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01a8ed6f0, {READY <nil>}
    I0223 21:13:06.369093      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 21:13:10.827852      17 status.go:71] apiserver received an error that is not an metav1.Status: &errors.errorString{s:"context canceled"}
    E0223 21:13:10.828146      17 writers.go:107] apiserver was unable to write a JSON response: http: Handler timeout
    E0223 21:13:10.829989      17 status.go:71] apiserver received an error that is not an metav1.Status: &errors.errorString{s:"http: Handler timeout"}
    E0223 21:13:10.831310      17 writers.go:120] apiserver was unable to write a fallback JSON response: http: Handler timeout
    I0223 21:13:15.299968      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:13:15.300029      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:13:15.300044      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:13:15.300256      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc035280450, {CONNECTING <nil>}
    I0223 21:13:15.311888      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc035280450, {READY <nil>}
    I0223 21:13:15.313520      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:13:17.248615      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:13:17.248672      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:13:17.248688      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:13:17.248781      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc03557b520, {CONNECTING <nil>}
    I0223 21:13:17.257583      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc03557b520, {READY <nil>}
    I0223 21:13:17.258487      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:13:32.917626      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:13:32.917669      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:13:32.917680      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:13:32.917778      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc03019a820, {CONNECTING <nil>}
    I0223 21:13:32.930085      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc03019a820, {READY <nil>}
    I0223 21:13:32.932967      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:13:46.802149      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:13:46.802203      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:13:46.802218      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:13:46.802446      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0153d3f60, {CONNECTING <nil>}
    I0223 21:13:46.811783      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0153d3f60, {READY <nil>}
    I0223 21:13:46.812578      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:13:56.313846      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:13:56.313926      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:13:56.313945      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:13:56.314173      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02d0900a0, {CONNECTING <nil>}
    I0223 21:13:56.323192      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02d0900a0, {READY <nil>}
    I0223 21:13:56.324064      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:13:56.817804      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:13:56.817867      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:13:56.817887      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:13:56.818153      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01582d6a0, {CONNECTING <nil>}
    I0223 21:13:56.829723      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01582d6a0, {READY <nil>}
    I0223 21:13:56.831252      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:14:05.268374      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:14:05.268419      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:14:05.268431      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:14:05.268688      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc034b1a2e0, {CONNECTING <nil>}
    I0223 21:14:05.282579      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc034b1a2e0, {READY <nil>}
    I0223 21:14:05.284560      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:14:15.883271      17 trace.go:205] Trace[1851691216]: "List etcd3" key:/operators.coreos.com/clusterserviceversions,resourceVersion:,resourceVersionMatch:,limit:250,continue: (23-Feb-2021 21:14:14.975) (total time: 908ms):
    Trace[1851691216]: [908.176311ms] [908.176311ms] END
    I0223 21:14:20.279706      17 trace.go:205] Trace[844867971]: "List" url:/apis/operators.coreos.com/v1alpha1/clusterserviceversions,user-agent:Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36,client:::1 (23-Feb-2021 21:14:14.974) (total time: 5304ms):
    Trace[844867971]: ---"Listing from storage done" 908ms (21:14:00.884)
    Trace[844867971]: ---"Writing http response done" count:189 4395ms (21:14:00.279)
    Trace[844867971]: [5.304725735s] [5.304725735s] END
    I0223 21:14:25.013115      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:14:25.013175      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:14:25.013188      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:14:25.013372      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc029e60230, {CONNECTING <nil>}
    I0223 21:14:25.023250      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc029e60230, {READY <nil>}
    I0223 21:14:25.024274      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:14:26.927862      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:14:26.927905      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:14:26.927916      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:14:26.928180      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc029988800, {CONNECTING <nil>}
    I0223 21:14:26.940078      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc029988800, {READY <nil>}
    I0223 21:14:26.941511      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 21:14:28.288792      17 writers.go:107] apiserver was unable to write a JSON response: http: Handler timeout
    E0223 21:14:28.288892      17 status.go:71] apiserver received an error that is not an metav1.Status: &errors.errorString{s:"http: Handler timeout"}
    E0223 21:14:28.289964      17 writers.go:120] apiserver was unable to write a fallback JSON response: http: Handler timeout
    I0223 21:14:30.898402      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:14:30.898512      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:14:30.898531      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:14:30.898696      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc000a47a00, {CONNECTING <nil>}
    I0223 21:14:30.908226      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc000a47a00, {READY <nil>}
    I0223 21:14:30.909038      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 21:14:33.153433      17 controller.go:116] loading OpenAPI spec for "v1.admission.work.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 21:14:33.153472      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.work.open-cluster-management.io: Rate Limited Requeue.
    E0223 21:14:33.163325      17 controller.go:116] loading OpenAPI spec for "v1beta1.webhook.certmanager.k8s.io" failed with: OpenAPI spec does not exist
    I0223 21:14:33.163349      17 controller.go:129] OpenAPI AggregationController: action for item v1beta1.webhook.certmanager.k8s.io: Rate Limited Requeue.
    E0223 21:14:33.195417      17 controller.go:116] loading OpenAPI spec for "v1.admission.hive.openshift.io" failed with: OpenAPI spec does not exist
    I0223 21:14:33.195444      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.hive.openshift.io: Rate Limited Requeue.
    E0223 21:14:33.212732      17 controller.go:116] loading OpenAPI spec for "v1.admission.cluster.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 21:14:33.212765      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.cluster.open-cluster-management.io: Rate Limited Requeue.
    I0223 21:14:48.317662      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:14:48.317715      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:14:48.317767      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:14:48.318007      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc025a10540, {CONNECTING <nil>}
    I0223 21:14:48.328952      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc025a10540, {READY <nil>}
    I0223 21:14:48.330649      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:14:58.546480      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:14:58.546549      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:14:58.546593      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:14:58.546692      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0195f27e0, {CONNECTING <nil>}
    I0223 21:14:58.558690      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0195f27e0, {READY <nil>}
    I0223 21:14:58.560150      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:15:04.725081      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:15:04.725128      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:15:04.725144      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:15:04.725486      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0202f5a50, {CONNECTING <nil>}
    I0223 21:15:04.735176      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0202f5a50, {READY <nil>}
    I0223 21:15:04.736161      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:15:04.893053      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:15:04.893118      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:15:04.893138      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:15:04.893436      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc021770010, {CONNECTING <nil>}
    I0223 21:15:04.903549      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc021770010, {READY <nil>}
    I0223 21:15:04.904562      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:15:28.105084      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:15:28.105131      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:15:28.105144      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:15:28.105465      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc016a7cdd0, {CONNECTING <nil>}
    I0223 21:15:28.117166      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc016a7cdd0, {READY <nil>}
    I0223 21:15:28.118578      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:15:30.953389      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:15:30.953438      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:15:30.953449      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:15:30.953549      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc031608510, {CONNECTING <nil>}
    I0223 21:15:30.967940      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc031608510, {READY <nil>}
    I0223 21:15:30.969438      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 21:15:33.170122      17 controller.go:116] loading OpenAPI spec for "v1.admission.work.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 21:15:33.170152      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.work.open-cluster-management.io: Rate Limited Requeue.
    E0223 21:15:33.182563      17 controller.go:116] loading OpenAPI spec for "v1beta1.webhook.certmanager.k8s.io" failed with: OpenAPI spec does not exist
    I0223 21:15:33.182644      17 controller.go:129] OpenAPI AggregationController: action for item v1beta1.webhook.certmanager.k8s.io: Rate Limited Requeue.
    E0223 21:15:33.213078      17 controller.go:116] loading OpenAPI spec for "v1.admission.hive.openshift.io" failed with: OpenAPI spec does not exist
    I0223 21:15:33.213103      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.hive.openshift.io: Rate Limited Requeue.
    E0223 21:15:33.226881      17 controller.go:116] loading OpenAPI spec for "v1.admission.cluster.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 21:15:33.226902      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.cluster.open-cluster-management.io: Rate Limited Requeue.
    I0223 21:15:37.888689      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:15:37.889016      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:15:37.889163      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:15:37.889315      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0361edce0, {CONNECTING <nil>}
    I0223 21:15:37.903376      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0361edce0, {READY <nil>}
    I0223 21:15:37.905163      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:15:41.863473      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:15:41.863532      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:15:41.863551      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:15:41.863705      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02f9714f0, {CONNECTING <nil>}
    I0223 21:15:41.873129      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02f9714f0, {READY <nil>}
    I0223 21:15:41.874011      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:16:00.155401      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:16:00.155460      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:16:00.155476      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:16:00.155603      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01595f550, {CONNECTING <nil>}
    I0223 21:16:00.171807      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01595f550, {READY <nil>}
    I0223 21:16:00.173268      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 21:16:06.113329      17 status.go:71] apiserver received an error that is not an metav1.Status: &errors.errorString{s:"context canceled"}
    E0223 21:16:06.113691      17 writers.go:107] apiserver was unable to write a JSON response: http: Handler timeout
    E0223 21:16:06.114749      17 status.go:71] apiserver received an error that is not an metav1.Status: &errors.errorString{s:"http: Handler timeout"}
    E0223 21:16:06.116000      17 writers.go:120] apiserver was unable to write a fallback JSON response: http: Handler timeout
    I0223 21:16:10.792072      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:16:10.792167      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:16:10.792183      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:16:10.792561      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02dbc9b90, {CONNECTING <nil>}
    I0223 21:16:10.801726      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02dbc9b90, {READY <nil>}
    I0223 21:16:10.802731      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:16:13.268742      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:16:13.268798      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:16:13.268816      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:16:13.268969      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc029753b60, {CONNECTING <nil>}
    I0223 21:16:13.282738      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc029753b60, {READY <nil>}
    I0223 21:16:13.284243      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:16:24.345492      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:16:24.345540      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:16:24.345555      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:16:24.346001      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0155cf090, {CONNECTING <nil>}
    I0223 21:16:24.357560      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0155cf090, {READY <nil>}
    I0223 21:16:24.358603      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:16:41.513081      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:16:41.513141      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:16:41.513159      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:16:41.513303      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02e997490, {CONNECTING <nil>}
    I0223 21:16:41.526139      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02e997490, {READY <nil>}
    I0223 21:16:41.529960      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:16:42.255137      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:16:42.255194      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:16:42.255210      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:16:42.255477      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02548a7b0, {CONNECTING <nil>}
    I0223 21:16:42.277548      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02548a7b0, {READY <nil>}
    I0223 21:16:42.279174      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:16:55.088645      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:16:55.088690      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:16:55.088706      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:16:55.088947      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0323bff20, {CONNECTING <nil>}
    I0223 21:16:55.102715      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0323bff20, {READY <nil>}
    I0223 21:16:55.104384      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:17:01.990796      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:17:01.990853      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:17:01.990869      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:17:01.991114      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc030399690, {CONNECTING <nil>}
    I0223 21:17:02.000919      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc030399690, {READY <nil>}
    I0223 21:17:02.001862      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:17:21.616370      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:17:21.616425      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:17:21.616440      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:17:21.616594      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0358bc270, {CONNECTING <nil>}
    I0223 21:17:21.625446      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0358bc270, {READY <nil>}
    I0223 21:17:21.626309      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:17:23.289063      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:17:23.289156      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:17:23.289170      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:17:23.289406      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02bda3b90, {CONNECTING <nil>}
    I0223 21:17:23.302721      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02bda3b90, {READY <nil>}
    I0223 21:17:23.303991      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 21:17:33.182392      17 controller.go:116] loading OpenAPI spec for "v1.admission.work.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 21:17:33.182417      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.work.open-cluster-management.io: Rate Limited Requeue.
    E0223 21:17:33.195199      17 controller.go:116] loading OpenAPI spec for "v1beta1.webhook.certmanager.k8s.io" failed with: OpenAPI spec does not exist
    I0223 21:17:33.195229      17 controller.go:129] OpenAPI AggregationController: action for item v1beta1.webhook.certmanager.k8s.io: Rate Limited Requeue.
    E0223 21:17:33.218321      17 controller.go:116] loading OpenAPI spec for "v1.admission.hive.openshift.io" failed with: OpenAPI spec does not exist
    I0223 21:17:33.218370      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.hive.openshift.io: Rate Limited Requeue.
    E0223 21:17:33.240534      17 controller.go:116] loading OpenAPI spec for "v1.admission.cluster.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 21:17:33.240561      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.cluster.open-cluster-management.io: Rate Limited Requeue.
    I0223 21:17:37.938137      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:17:37.938183      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:17:37.938195      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:17:37.938471      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01ca91d70, {CONNECTING <nil>}
    I0223 21:17:37.950310      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01ca91d70, {READY <nil>}
    I0223 21:17:37.951811      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:17:46.522864      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:17:46.522952      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:17:46.522971      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:17:46.523162      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0273493e0, {CONNECTING <nil>}
    I0223 21:17:46.534185      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0273493e0, {READY <nil>}
    I0223 21:17:46.534956      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:17:53.896231      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:17:53.896277      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:17:53.896293      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:17:53.896407      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc012773650, {CONNECTING <nil>}
    I0223 21:17:53.909033      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc012773650, {READY <nil>}
    I0223 21:17:53.910891      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:18:02.935850      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:18:02.935909      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:18:02.937826      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:18:02.937965      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc00ba3f810, {CONNECTING <nil>}
    I0223 21:18:02.949495      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc00ba3f810, {READY <nil>}
    I0223 21:18:02.950388      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:18:17.132409      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:18:17.132469      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:18:17.132486      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:18:17.132587      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc028527870, {CONNECTING <nil>}
    I0223 21:18:17.145056      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc028527870, {READY <nil>}
    I0223 21:18:17.146195      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:18:18.919944      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:18:18.919991      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:18:18.920004      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:18:18.920121      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc021bdde60, {CONNECTING <nil>}
    I0223 21:18:18.931320      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc021bdde60, {READY <nil>}
    I0223 21:18:18.932740      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:18:32.827104      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:18:32.827201      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:18:32.827216      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:18:32.827438      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02d223d00, {CONNECTING <nil>}
    I0223 21:18:32.841045      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02d223d00, {READY <nil>}
    I0223 21:18:32.842596      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:18:43.266732      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:18:43.266775      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:18:43.266786      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:18:43.267121      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02e439410, {CONNECTING <nil>}
    I0223 21:18:43.276709      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02e439410, {READY <nil>}
    I0223 21:18:43.277658      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:18:57.657933      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:18:57.658019      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:18:57.658039      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:18:57.658259      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01c53f290, {CONNECTING <nil>}
    I0223 21:18:57.668233      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01c53f290, {READY <nil>}
    I0223 21:18:57.669957      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:19:02.962684      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:19:02.962741      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:19:02.962758      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:19:02.962845      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc015e35040, {CONNECTING <nil>}
    I0223 21:19:02.975890      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc015e35040, {READY <nil>}
    I0223 21:19:02.977403      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:19:04.137279      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:19:04.137333      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:19:04.137350      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:19:04.137444      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc015f997f0, {CONNECTING <nil>}
    I0223 21:19:04.149492      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc015f997f0, {READY <nil>}
    I0223 21:19:04.150875      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 21:19:13.433053      17 writers.go:107] apiserver was unable to write a JSON response: http: Handler timeout
    E0223 21:19:13.433151      17 status.go:71] apiserver received an error that is not an metav1.Status: &errors.errorString{s:"http: Handler timeout"}
    E0223 21:19:13.434297      17 writers.go:120] apiserver was unable to write a fallback JSON response: http: Handler timeout
    I0223 21:19:18.153753      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:19:18.153794      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:19:18.153809      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:19:18.154047      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0156f35a0, {CONNECTING <nil>}
    I0223 21:19:18.163167      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0156f35a0, {READY <nil>}
    I0223 21:19:18.164138      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:19:28.203599      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:19:28.203660      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:19:28.203679      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:19:28.203887      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02b2ef800, {CONNECTING <nil>}
    I0223 21:19:28.212877      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02b2ef800, {READY <nil>}
    I0223 21:19:28.213726      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 21:19:33.174134      17 controller.go:116] loading OpenAPI spec for "v1.admission.hive.openshift.io" failed with: OpenAPI spec does not exist
    I0223 21:19:33.174307      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.hive.openshift.io: Rate Limited Requeue.
    E0223 21:19:33.191839      17 controller.go:116] loading OpenAPI spec for "v1.admission.cluster.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 21:19:33.191868      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.cluster.open-cluster-management.io: Rate Limited Requeue.
    E0223 21:19:33.202845      17 controller.go:116] loading OpenAPI spec for "v1.admission.work.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 21:19:33.202875      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.work.open-cluster-management.io: Rate Limited Requeue.
    E0223 21:19:33.214848      17 controller.go:116] loading OpenAPI spec for "v1beta1.webhook.certmanager.k8s.io" failed with: OpenAPI spec does not exist
    I0223 21:19:33.214876      17 controller.go:129] OpenAPI AggregationController: action for item v1beta1.webhook.certmanager.k8s.io: Rate Limited Requeue.
    I0223 21:19:35.487099      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:19:35.487155      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:19:35.487173      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:19:35.487364      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc035498530, {CONNECTING <nil>}
    I0223 21:19:35.500163      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc035498530, {READY <nil>}
    I0223 21:19:35.502348      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:19:38.734022      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:19:38.734071      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:19:38.734089      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:19:38.734357      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02fad9800, {CONNECTING <nil>}
    I0223 21:19:38.745231      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02fad9800, {READY <nil>}
    I0223 21:19:38.746618      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 21:19:42.653870      17 status.go:71] apiserver received an error that is not an metav1.Status: &errors.errorString{s:"context canceled"}
    E0223 21:19:42.654148      17 writers.go:107] apiserver was unable to write a JSON response: http: Handler timeout
    E0223 21:19:42.655044      17 status.go:71] apiserver received an error that is not an metav1.Status: &errors.errorString{s:"http: Handler timeout"}
    E0223 21:19:42.656156      17 writers.go:120] apiserver was unable to write a fallback JSON response: http: Handler timeout
    I0223 21:19:52.755682      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:19:52.755760      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:19:52.755774      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:19:52.756014      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0156478f0, {CONNECTING <nil>}
    I0223 21:19:52.765877      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0156478f0, {READY <nil>}
    I0223 21:19:52.766904      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 21:20:00.460287      17 writers.go:107] apiserver was unable to write a JSON response: http: Handler timeout
    E0223 21:20:00.460465      17 status.go:71] apiserver received an error that is not an metav1.Status: &errors.errorString{s:"http: Handler timeout"}
    E0223 21:20:00.461413      17 writers.go:120] apiserver was unable to write a fallback JSON response: http: Handler timeout
    I0223 21:20:04.040109      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:20:04.040162      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:20:04.040178      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:20:04.040674      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc032d94ea0, {CONNECTING <nil>}
    I0223 21:20:04.051167      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc032d94ea0, {READY <nil>}
    I0223 21:20:04.052201      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:20:10.177003      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:20:10.177055      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:20:10.177071      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:20:10.177321      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc03506a060, {CONNECTING <nil>}
    I0223 21:20:10.198124      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc03506a060, {READY <nil>}
    I0223 21:20:10.199382      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:20:11.893164      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:20:11.893220      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:20:11.893237      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:20:11.893472      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc03508d8f0, {CONNECTING <nil>}
    I0223 21:20:11.906759      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc03508d8f0, {READY <nil>}
    I0223 21:20:11.908109      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:20:24.258181      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:20:24.258232      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:20:24.258245      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:20:24.258339      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01cdf7940, {CONNECTING <nil>}
    I0223 21:20:24.270552      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01cdf7940, {READY <nil>}
    I0223 21:20:24.271774      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 21:20:33.191134      17 controller.go:116] loading OpenAPI spec for "v1.admission.hive.openshift.io" failed with: OpenAPI spec does not exist
    I0223 21:20:33.191165      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.hive.openshift.io: Rate Limited Requeue.
    E0223 21:20:33.201606      17 controller.go:116] loading OpenAPI spec for "v1.admission.cluster.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 21:20:33.201631      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.cluster.open-cluster-management.io: Rate Limited Requeue.
    E0223 21:20:33.210185      17 controller.go:116] loading OpenAPI spec for "v1.admission.work.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 21:20:33.210206      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.work.open-cluster-management.io: Rate Limited Requeue.
    E0223 21:20:33.233426      17 controller.go:116] loading OpenAPI spec for "v1beta1.webhook.certmanager.k8s.io" failed with: OpenAPI spec does not exist
    I0223 21:20:33.233459      17 controller.go:129] OpenAPI AggregationController: action for item v1beta1.webhook.certmanager.k8s.io: Rate Limited Requeue.
    I0223 21:20:41.669988      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:20:41.670053      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:20:41.670070      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:20:41.670229      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc023898660, {CONNECTING <nil>}
    I0223 21:20:41.679695      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc023898660, {READY <nil>}
    I0223 21:20:41.680821      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:20:43.728760      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:20:43.728816      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:20:43.728833      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:20:43.729086      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc022913ab0, {CONNECTING <nil>}
    I0223 21:20:43.741221      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc022913ab0, {READY <nil>}
    I0223 21:20:43.742709      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:20:44.950634      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:20:44.950690      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:20:44.950705      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:20:44.950832      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01e9ee0a0, {CONNECTING <nil>}
    I0223 21:20:44.964342      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01e9ee0a0, {READY <nil>}
    I0223 21:20:44.967288      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:21:02.601661      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:21:02.601705      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:21:02.601721      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:21:02.601801      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02b0785d0, {CONNECTING <nil>}
    I0223 21:21:02.611769      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02b0785d0, {READY <nil>}
    I0223 21:21:02.612774      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:21:13.214291      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:21:13.214367      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:21:13.214384      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:21:13.214559      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02282d7d0, {CONNECTING <nil>}
    I0223 21:21:13.224600      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02282d7d0, {READY <nil>}
    I0223 21:21:13.225508      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:21:13.817284      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:21:13.817330      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:21:13.817346      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:21:13.817527      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc023e3a3e0, {CONNECTING <nil>}
    I0223 21:21:13.831267      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc023e3a3e0, {READY <nil>}
    I0223 21:21:13.832799      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:21:28.332771      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:21:28.332816      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:21:28.332827      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:21:28.332994      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc014a6e550, {CONNECTING <nil>}
    I0223 21:21:28.343768      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc014a6e550, {READY <nil>}
    I0223 21:21:28.345225      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:21:42.235865      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:21:42.235945      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:21:42.235964      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:21:42.236181      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc019101370, {CONNECTING <nil>}
    I0223 21:21:42.245212      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc019101370, {READY <nil>}
    I0223 21:21:42.245962      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:21:43.241794      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:21:43.241839      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:21:43.241853      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:21:43.241948      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01916d240, {CONNECTING <nil>}
    I0223 21:21:43.253106      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01916d240, {READY <nil>}
    I0223 21:21:43.253997      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 21:21:47.689584      17 writers.go:107] apiserver was unable to write a JSON response: http: Handler timeout
    E0223 21:21:47.689692      17 status.go:71] apiserver received an error that is not an metav1.Status: &errors.errorString{s:"http: Handler timeout"}
    E0223 21:21:47.690704      17 writers.go:120] apiserver was unable to write a fallback JSON response: http: Handler timeout
    I0223 21:21:53.309086      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:21:53.309150      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:21:53.309167      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:21:53.309563      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01fcd22a0, {CONNECTING <nil>}
    I0223 21:21:53.325778      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01fcd22a0, {READY <nil>}
    I0223 21:21:53.332321      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:22:05.139333      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:22:05.139378      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:22:05.139393      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:22:05.139640      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02d0e28c0, {CONNECTING <nil>}
    I0223 21:22:05.152428      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02d0e28c0, {READY <nil>}
    I0223 21:22:05.154054      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:22:19.257899      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:22:19.258139      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:22:19.258244      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:22:19.258820      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0167adaa0, {CONNECTING <nil>}
    I0223 21:22:19.272289      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0167adaa0, {READY <nil>}
    I0223 21:22:19.273237      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:22:22.615347      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:22:22.615403      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:22:22.615422      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:22:22.615526      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02dc2d2d0, {CONNECTING <nil>}
    I0223 21:22:22.627406      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02dc2d2d0, {READY <nil>}
    I0223 21:22:22.628796      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    E0223 21:22:33.206358      17 controller.go:116] loading OpenAPI spec for "v1.admission.hive.openshift.io" failed with: OpenAPI spec does not exist
    I0223 21:22:33.206393      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.hive.openshift.io: Rate Limited Requeue.
    E0223 21:22:33.215881      17 controller.go:116] loading OpenAPI spec for "v1.admission.cluster.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 21:22:33.215904      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.cluster.open-cluster-management.io: Rate Limited Requeue.
    E0223 21:22:33.235721      17 controller.go:116] loading OpenAPI spec for "v1.admission.work.open-cluster-management.io" failed with: OpenAPI spec does not exist
    I0223 21:22:33.235751      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.work.open-cluster-management.io: Rate Limited Requeue.
    E0223 21:22:33.244813      17 controller.go:116] loading OpenAPI spec for "v1beta1.webhook.certmanager.k8s.io" failed with: OpenAPI spec does not exist
    I0223 21:22:33.244841      17 controller.go:129] OpenAPI AggregationController: action for item v1beta1.webhook.certmanager.k8s.io: Rate Limited Requeue.
    I0223 21:22:38.168683      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:22:38.168746      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:22:38.168804      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:22:38.168977      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc016235960, {CONNECTING <nil>}
    I0223 21:22:38.182154      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc016235960, {READY <nil>}
    I0223 21:22:38.183627      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:22:39.664918      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:22:39.664990      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:22:39.665007      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:22:39.665213      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc015f77810, {CONNECTING <nil>}
    I0223 21:22:39.677648      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc015f77810, {READY <nil>}
    I0223 21:22:39.679188      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:22:58.422128      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:22:58.422172      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:22:58.422187      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:22:58.422488      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc030c9e970, {CONNECTING <nil>}
    I0223 21:22:58.431488      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc030c9e970, {READY <nil>}
    I0223 21:22:58.432390      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:23:02.412858      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:23:02.412920      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:23:02.412955      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:23:02.413176      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02730aed0, {CONNECTING <nil>}
    I0223 21:23:02.421687      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02730aed0, {READY <nil>}
    I0223 21:23:02.422555      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:23:10.071750      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:23:10.071829      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:23:10.071849      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:23:10.072068      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02d86f0f0, {CONNECTING <nil>}
    I0223 21:23:10.084804      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02d86f0f0, {READY <nil>}
    I0223 21:23:10.086746      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:23:20.907707      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:23:20.907757      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:23:20.907773      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:23:20.908070      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc016d4a3a0, {CONNECTING <nil>}
    I0223 21:23:20.924282      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc016d4a3a0, {READY <nil>}
    I0223 21:23:20.926408      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:23:33.814413      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:23:33.814470      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:23:33.814487      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:23:33.814861      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02789a9b0, {CONNECTING <nil>}
    I0223 21:23:33.824549      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02789a9b0, {READY <nil>}
    I0223 21:23:33.825668      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:23:34.329973      17 trace.go:205] Trace[1607892184]: "List etcd3" key:/operators.coreos.com/clusterserviceversions,resourceVersion:,resourceVersionMatch:,limit:250,continue: (23-Feb-2021 21:23:33.631) (total time: 697ms):
    Trace[1607892184]: [697.988093ms] [697.988093ms] END
    I0223 21:23:34.766777      17 trace.go:205] Trace[684229113]: "List" url:/apis/operators.coreos.com/v1alpha1/clusterserviceversions,user-agent:Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36,client:::1 (23-Feb-2021 21:23:33.631) (total time: 1134ms):
    Trace[684229113]: ---"Listing from storage done" 698ms (21:23:00.330)
    Trace[684229113]: ---"Writing http response done" count:189 435ms (21:23:00.766)
    Trace[684229113]: [1.134924407s] [1.134924407s] END
    I0223 21:23:35.309761      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:23:35.309806      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:23:35.309821      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:23:35.310003      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02783ecd0, {CONNECTING <nil>}
    I0223 21:23:35.319717      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02783ecd0, {READY <nil>}
    I0223 21:23:35.320946      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:23:53.076921      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:23:53.077008      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:23:53.077058      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:23:53.077134      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc013f88e10, {CONNECTING <nil>}
    I0223 21:23:53.088701      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc013f88e10, {READY <nil>}
    I0223 21:23:53.090189      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:23:53.690778      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:23:53.690835      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:23:53.690851      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:23:53.691091      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc013c41190, {CONNECTING <nil>}
    I0223 21:23:53.703160      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc013c41190, {READY <nil>}
    I0223 21:23:53.704795      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:24:05.987748      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:24:05.987792      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:24:05.987807      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:24:05.988298      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02b7cc240, {CONNECTING <nil>}
    I0223 21:24:06.000532      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02b7cc240, {READY <nil>}
    I0223 21:24:06.001825      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"
    I0223 21:24:08.119533      17 client.go:360] parsed scheme: "passthrough"
    I0223 21:24:08.119577      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}
    I0223 21:24:08.119588      17 clientconn.go:948] ClientConn switching balancer to "pick_first"
    I0223 21:24:08.119668      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc03ba3fd20, {CONNECTING <nil>}
    I0223 21:24:08.130093      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc03ba3fd20, {READY <nil>}
    I0223 21:24:08.132058      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"`,
  data1:
    'Copying system trust bundle\n    Waiting for port :6443 to be released.\n    I0223 20:04:25.084507       1 loader.go:379] Config loaded from file:  /etc/kubernetes/static-pod-resources/configmaps/kube-apiserver-cert-syncer-kubeconfig/kubeconfig\n    Copying termination logs to "/var/log/kube-apiserver/termination.log"\n    I0223 20:04:25.087543       1 main.go:124] Touching termination lock file "/var/log/kube-apiserver/.terminating"\n    I0223 20:04:25.088797       1 main.go:182] Launching sub-process "/usr/bin/hyperkube kube-apiserver --openshift-config=/etc/kubernetes/static-pod-resources/configmaps/config/config.yaml --advertise-address=10.0.171.12 -v=2 --permit-address-sharing"\n    Flag --openshift-config has been deprecated, to be removed\n    I0223 20:04:25.238681      17 plugins.go:84] Registered admission plugin "authorization.openshift.io/RestrictSubjectBindings"\n    I0223 20:04:25.238763      17 plugins.go:84] Registered admission plugin "image.openshift.io/ImagePolicy"\n    I0223 20:04:25.238775      17 plugins.go:84] Registered admission plugin "route.openshift.io/IngressAdmission"\n    I0223 20:04:25.238783      17 plugins.go:84] Registered admission plugin "scheduling.openshift.io/OriginPodNodeEnvironment"\n    I0223 20:04:25.238792      17 plugins.go:84] Registered admission plugin "autoscaling.openshift.io/ClusterResourceOverride"\n    I0223 20:04:25.238801      17 plugins.go:84] Registered admission plugin "quota.openshift.io/ClusterResourceQuota"\n    I0223 20:04:25.238810      17 plugins.go:84] Registered admission plugin "autoscaling.openshift.io/RunOnceDuration"\n    I0223 20:04:25.238819      17 plugins.go:84] Registered admission plugin "scheduling.openshift.io/PodNodeConstraints"\n    I0223 20:04:25.238829      17 plugins.go:84] Registered admission plugin "security.openshift.io/SecurityContextConstraint"\n    I0223 20:04:25.238838      17 plugins.go:84] Registered admission plugin "security.openshift.io/SCCExecRestrictions"\n    I0223 20:04:25.238846      17 plugins.go:84] Registered admission plugin "network.openshift.io/ExternalIPRanger"\n    I0223 20:04:25.238856      17 plugins.go:84] Registered admission plugin "network.openshift.io/RestrictedEndpointsAdmission"\n    I0223 20:04:25.238873      17 plugins.go:84] Registered admission plugin "config.openshift.io/ValidateAPIServer"\n    I0223 20:04:25.238883      17 plugins.go:84] Registered admission plugin "config.openshift.io/ValidateAuthentication"\n    I0223 20:04:25.238892      17 plugins.go:84] Registered admission plugin "config.openshift.io/ValidateFeatureGate"\n    I0223 20:04:25.238952      17 plugins.go:84] Registered admission plugin "config.openshift.io/ValidateConsole"\n    I0223 20:04:25.238966      17 plugins.go:84] Registered admission plugin "config.openshift.io/ValidateImage"\n    I0223 20:04:25.238975      17 plugins.go:84] Registered admission plugin "config.openshift.io/ValidateOAuth"\n    I0223 20:04:25.238991      17 plugins.go:84] Registered admission plugin "config.openshift.io/ValidateProject"\n    I0223 20:04:25.239003      17 plugins.go:84] Registered admission plugin "config.openshift.io/DenyDeleteClusterConfiguration"\n    I0223 20:04:25.239014      17 plugins.go:84] Registered admission plugin "config.openshift.io/ValidateScheduler"\n    I0223 20:04:25.239025      17 plugins.go:84] Registered admission plugin "quota.openshift.io/ValidateClusterResourceQuota"\n    I0223 20:04:25.239035      17 plugins.go:84] Registered admission plugin "security.openshift.io/ValidateSecurityContextConstraints"\n    I0223 20:04:25.239046      17 plugins.go:84] Registered admission plugin "authorization.openshift.io/ValidateRoleBindingRestriction"\n    I0223 20:04:25.239056      17 plugins.go:84] Registered admission plugin "config.openshift.io/ValidateNetwork"\n    I0223 20:04:25.239065      17 plugins.go:84] Registered admission plugin "security.openshift.io/DefaultSecurityContextConstraints"\n    I0223 20:04:25.243294      17 feature_gate.go:244] feature gates: &{map[APIPriorityAndFairness:true]}\n    I0223 20:04:25.243381      17 feature_gate.go:244] feature gates: &{map[APIPriorityAndFairness:true RotateKubeletServerCertificate:true]}\n    W0223 20:04:25.243488      17 feature_gate.go:236] Setting GA feature gate SupportPodPidsLimit=true. It will be removed in a future release.\n    I0223 20:04:25.243540      17 feature_gate.go:244] feature gates: &{map[APIPriorityAndFairness:true RotateKubeletServerCertificate:true SupportPodPidsLimit:true]}\n    I0223 20:04:25.243629      17 feature_gate.go:244] feature gates: &{map[APIPriorityAndFairness:true NodeDisruptionExclusion:true RotateKubeletServerCertificate:true SupportPodPidsLimit:true]}\n    I0223 20:04:25.243709      17 feature_gate.go:244] feature gates: &{map[APIPriorityAndFairness:true NodeDisruptionExclusion:true RotateKubeletServerCertificate:true ServiceNodeExclusion:true SupportPodPidsLimit:true]}\n    W0223 20:04:25.243803      17 feature_gate.go:236] Setting GA feature gate SCTPSupport=true. It will be removed in a future release.\n    I0223 20:04:25.243846      17 feature_gate.go:244] feature gates: &{map[APIPriorityAndFairness:true NodeDisruptionExclusion:true RotateKubeletServerCertificate:true SCTPSupport:true ServiceNodeExclusion:true SupportPodPidsLimit:true]}\n    I0223 20:04:25.243962      17 feature_gate.go:244] feature gates: &{map[APIPriorityAndFairness:true LegacyNodeRoleBehavior:false NodeDisruptionExclusion:true RotateKubeletServerCertificate:true SCTPSupport:true ServiceNodeExclusion:true SupportPodPidsLimit:true]}\n    Flag --openshift-config has been deprecated, to be removed\n    Flag --enable-logs-handler has been deprecated, This flag will be removed in v1.19\n    Flag --enable-swagger-ui has been deprecated, swagger 1.2 support has been removed\n    Flag --insecure-port has been deprecated, This flag has no effect now and will be removed in v1.24.\n    Flag --kubelet-https has been deprecated, API Server connections to kubelets always use https. This flag will be removed in 1.22.\n    Flag --kubelet-read-only-port has been deprecated, kubelet-read-only-port is deprecated and will be removed.\n    I0223 20:04:25.244167      17 flags.go:59] FLAG: --add-dir-header="false"\n    I0223 20:04:25.244184      17 flags.go:59] FLAG: --address="127.0.0.1"\n    I0223 20:04:25.244196      17 flags.go:59] FLAG: --admission-control="[]"\n    I0223 20:04:25.244213      17 flags.go:59] FLAG: --admission-control-config-file="/tmp/kubeapiserver-admission-config.yaml487454417"\n    I0223 20:04:25.244224      17 flags.go:59] FLAG: --advertise-address="10.0.171.12"\n    I0223 20:04:25.244234      17 flags.go:59] FLAG: --allow-privileged="true"\n    I0223 20:04:25.244251      17 flags.go:59] FLAG: --alsologtostderr="false"\n    I0223 20:04:25.244261      17 flags.go:59] FLAG: --anonymous-auth="true"\n    I0223 20:04:25.244302      17 flags.go:59] FLAG: --api-audiences="[https://kubernetes.default.svc]"\n    I0223 20:04:25.244317      17 flags.go:59] FLAG: --apiserver-count="1"\n    I0223 20:04:25.244327      17 flags.go:59] FLAG: --audit-log-batch-buffer-size="10000"\n    I0223 20:04:25.244336      17 flags.go:59] FLAG: --audit-log-batch-max-size="1"\n    I0223 20:04:25.244343      17 flags.go:59] FLAG: --audit-log-batch-max-wait="0s"\n    I0223 20:04:25.244354      17 flags.go:59] FLAG: --audit-log-batch-throttle-burst="0"\n    I0223 20:04:25.244362      17 flags.go:59] FLAG: --audit-log-batch-throttle-enable="false"\n    I0223 20:04:25.244371      17 flags.go:59] FLAG: --audit-log-batch-throttle-qps="0"\n    I0223 20:04:25.244382      17 flags.go:59] FLAG: --audit-log-compress="false"\n    I0223 20:04:25.244390      17 flags.go:59] FLAG: --audit-log-format="json"\n    I0223 20:04:25.244398      17 flags.go:59] FLAG: --audit-log-maxage="0"\n    I0223 20:04:25.244407      17 flags.go:59] FLAG: --audit-log-maxbackup="10"\n    I0223 20:04:25.244414      17 flags.go:59] FLAG: --audit-log-maxsize="100"\n    I0223 20:04:25.244423      17 flags.go:59] FLAG: --audit-log-mode="blocking"\n    I0223 20:04:25.244430      17 flags.go:59] FLAG: --audit-log-path="/var/log/kube-apiserver/audit.log"\n    I0223 20:04:25.244438      17 flags.go:59] FLAG: --audit-log-truncate-enabled="false"\n    I0223 20:04:25.244445      17 flags.go:59] FLAG: --audit-log-truncate-max-batch-size="10485760"\n    I0223 20:04:25.244458      17 flags.go:59] FLAG: --audit-log-truncate-max-event-size="102400"\n    I0223 20:04:25.244466      17 flags.go:59] FLAG: --audit-log-version="audit.k8s.io/v1"\n    I0223 20:04:25.244475      17 flags.go:59] FLAG: --audit-policy-file="/etc/kubernetes/static-pod-resources/configmaps/kube-apiserver-audit-policies/default.yaml"\n    I0223 20:04:25.244490      17 flags.go:59] FLAG: --audit-webhook-batch-buffer-size="10000"\n    I0223 20:04:25.244499      17 flags.go:59] FLAG: --audit-webhook-batch-initial-backoff="10s"\n    I0223 20:04:25.244509      17 flags.go:59] FLAG: --audit-webhook-batch-max-size="400"\n    I0223 20:04:25.244518      17 flags.go:59] FLAG: --audit-webhook-batch-max-wait="30s"\n    I0223 20:04:25.244526      17 flags.go:59] FLAG: --audit-webhook-batch-throttle-burst="15"\n    I0223 20:04:25.244533      17 flags.go:59] FLAG: --audit-webhook-batch-throttle-enable="true"',
  data2:
    'ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.strategy.properties.rollingUpdate.properties.maxUnavailable has invalid property: anyOf\n    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.containers.items.<array>.properties.env.items.<array>.properties.valueFrom.properties.resourceFieldRef.properties.divisor has invalid property: anyOf\n    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.containers.items.<array>.properties.lifecycle.properties.postStart.properties.httpGet.properties.port has invalid property: anyOf\n    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.containers.items.<array>.properties.lifecycle.properties.postStart.properties.tcpSocket.properties.port has invalid property: anyOf\n    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.containers.items.<array>.properties.lifecycle.properties.preStop.properties.httpGet.properties.port has invalid property: anyOf\n    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.containers.items.<array>.properties.lifecycle.properties.preStop.properties.tcpSocket.properties.port has invalid property: anyOf\n    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.containers.items.<array>.properties.livenessProbe.properties.httpGet.properties.port has invalid property: anyOf\n    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.containers.items.<array>.properties.livenessProbe.properties.tcpSocket.properties.port has invalid property: anyOf\n    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.containers.items.<array>.properties.readinessProbe.properties.httpGet.properties.port has invalid property: anyOf\n    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.containers.items.<array>.properties.readinessProbe.properties.tcpSocket.properties.port has invalid property: anyOf\n    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.containers.items.<array>.properties.resources.properties.limits.additionalProperties.schema has invalid property: anyOf\n    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.containers.items.<array>.properties.resources.properties.requests.additionalProperties.schema has invalid property: anyOf\n    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.containers.items.<array>.properties.startupProbe.properties.httpGet.properties.port has invalid property: anyOf\n    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.containers.items.<array>.properties.startupProbe.properties.tcpSocket.properties.port has invalid property: anyOf\n    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.ephemeralContainers.items.<array>.properties.env.items.<array>.properties.valueFrom.properties.resourceFieldRef.properties.divisor has invalid property: anyOf\n    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.ephemeralContainers.items.<array>.properties.lifecycle.properties.postStart.properties.httpGet.properties.port has invalid property: anyOf\n    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.ephemeralContainers.items.<array>.properties.lifecycle.properties.postStart.properties.tcpSocket.properties.port has invalid property: anyOf\n    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.ephemeralContainers.items.<array>.properties.lifecycle.properties.preStop.properties.httpGet.properties.port has invalid property: anyOf\n    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.ephemeralContainers.items.<array>.properties.lifecycle.properties.preStop.properties.tcpSocket.properties.port has invalid property: anyOf\n    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.ephemeralContainers.items.<array>.properties.livenessProbe.properties.httpGet.properties.port has invalid property: anyOf\n    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.ephemeralContainers.items.<array>.properties.livenessProbe.properties.tcpSocket.properties.port has invalid property: anyOf\n    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.ephemeralContainers.items.<array>.properties.readinessProbe.properties.httpGet.properties.port has invalid property: anyOf\n    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.ephemeralContainers.items.<array>.properties.readinessProbe.properties.tcpSocket.properties.port has invalid property: anyOf\n    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.ephemeralContainers.items.<array>.properties.resources.properties.limits.additionalProperties.schema has invalid property: anyOf\n    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.ephemeralContainers.items.<array>.properties.resources.properties.requests.additionalProperties.schema has invalid property: anyOf\n    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.ephemeralContainers.items.<array>.properties.startupProbe.properties.httpGet.properties.port has invalid property: anyOf\n    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.ephemeralContainers.items.<array>.properties.startupProbe.properties.tcpSocket.properties.port has invalid property: anyOf\n    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.initContainers.items.<array>.properties.env.items.<array>.properties.valueFrom.properties.resourceFieldRef.properties.divisor has invalid property: anyOf\n    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.initContainers.items.<array>.properties.lifecycle.properties.postStart.properties.httpGet.properties.port has invalid property: anyOf\n    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.initContainers.items.<array>.properties.lifecycle.properties.postStart.properties.tcpSocket.properties.port has invalid property: anyOf\n    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.initContainers.items.<array>.properties.lifecycle.properties.preStop.properties.httpGet.properties.port has invalid property: anyOf\n    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.initContainers.items.<array>.properties.lifecycle.properties.preStop.properties.tcpSocket.properties.port has invalid property: anyOf\n    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.initContainers.items.<array>.properties.livenessProbe.properties.httpGet.properties.port has invalid property: anyOf\n    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.initContainers.items.<array>.properties.livenessProbe.properties.tcpSocket.properties.port has invalid property: anyOf\n    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.initContainers.items.<array>.properties.readinessProbe.properties.httpGet.properties.port has invalid property: anyOf\n    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.initContainers.items.<array>.properties.readinessProbe.properties.tcpSocket.properties.port has invalid property: anyOf\n    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.initContainers.items.<array>.properties.resources.properties.limits.additionalProperties.schema has invalid property: anyOf\n    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.initContainers.items.<array>.properties.resources.properties.requests.additionalProperties.schema has invalid property: anyOf\n    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.initContainers.items.<array>.properties.startupProbe.properties.httpGet.properties.port has invalid property: anyOf\n    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.initContainers.items.<array>.properties.startupProbe.properties.tcpSocket.properties.port has invalid property: anyOf\n    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.overhead.additionalProperties.schema has invalid property: anyOf\n    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.volumes.items.<array>.properties.downwardAPI.properties.items.items.<array>.properties.resourceFieldRef.properties.divisor has invalid property: anyOf\n    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.volumes.items.<array>.properties.emptyDir.properties.sizeLimit has invalid property: anyOf\n    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.volumes.items.<array>.properties.ephemeral.properties.volumeClaimTemplate.properties.spec.properties.resources.properties.limits.additionalProperties.schema has invalid property: anyOf\n    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.volumes.items.<array>.properties.ephemeral.properties.volumeClaimTemplate.properties.spec.properties.resources.properties.requests.additionalProperties.schema has invalid property: anyOf\n    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.install.properties.spec.properties.deployments.items.<array>.properties.spec.properties.template.properties.spec.properties.volumes.items.<array>.properties.projected.properties.sources.items.<array>.properties.downwardAPI.properties.items.items.<array>.properties.resourceFieldRef.properties.divisor has invalid property: anyOf\n    ERROR $root.definitions.com.coreos.operators.v1alpha1.ClusterServiceVersion.properties.spec.properties.webhookdefinitions.items.<array>.properties.targetPort has invalid property: anyOf\n    I0223 20:05:07.667701      17 client.go:360] parsed scheme: "endpoint"\n    I0223 20:05:07.667752      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]\n    I0223 20:05:07.678136      17 store.go:1376] Monitoring clusterserviceversions.operators.coreos.com count at <storage-prefix>//operators.coreos.com/clusterserviceversions\n    I0223 20:05:07.691254      17 aggregator.go:231] Updating OpenAPI spec because v1beta1.metrics.k8s.io is updated\n    I0223 20:05:08.674654      17 trace.go:205] Trace[1868691782]: "List etcd3" key:/operators.coreos.com/clusterserviceversions,resourceVersion:,resourceVersionMatch:,limit:10000,continue: (23-Feb-2021 20:05:07.679) (total time: 995ms):\n    Trace[1868691782]: [995.4145ms] [995.4145ms] END\n    I0223 20:05:08.676188      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized\n    I0223 20:05:08.679737      17 client.go:360] parsed scheme: "endpoint"\n    I0223 20:05:08.679784      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]\n    I0223 20:05:08.698161      17 store.go:1376] Monitoring revisions.serving.knative.dev count at <storage-prefix>//serving.knative.dev/revisions\n    I0223 20:05:08.724867      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized\n    I0223 20:05:08.754671      17 client.go:360] parsed scheme: "endpoint"\n    I0223 20:05:08.754723      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]\n    I0223 20:05:08.767631      17 store.go:1376] Monitoring subscriptions.messaging.knative.dev count at <storage-prefix>//messaging.knative.dev/subscriptions\n    I0223 20:05:08.769534      17 client.go:360] parsed scheme: "endpoint"\n    I0223 20:05:08.769574      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]\n    I0223 20:05:08.789584      17 store.go:1376] Monitoring subscriptions.messaging.knative.dev count at <storage-prefix>//messaging.knative.dev/subscriptions\n    I0223 20:05:08.810383      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized\n    I0223 20:05:08.870012      17 client.go:360] parsed scheme: "endpoint"\n    I0223 20:05:08.870070      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]\n    I0223 20:05:08.884241      17 store.go:1376] Monitoring sinkbindings.sources.knative.dev count at <storage-prefix>//sources.knative.dev/sinkbindings\n    I0223 20:05:08.888348      17 client.go:360] parsed scheme: "endpoint"\n    I0223 20:05:08.888560      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]\n    I0223 20:05:08.893263      17 trace.go:205] Trace[779616982]: "Call conversion webhook" custom-resource-definition:subscriptions.messaging.knative.dev,desired-api-version:messaging.knative.dev/v1beta1,object-count:1,UID:dc30bc31-0391-49ed-8c76-86daaa780e14 (23-Feb-2021 20:05:08.794) (total time: 98ms):\n    Trace[779616982]: ---"Request completed" 98ms (20:05:00.892)\n    Trace[779616982]: [98.488399ms] [98.488399ms] END\n    I0223 20:05:08.906377      17 store.go:1376] Monitoring sinkbindings.sources.knative.dev count at <storage-prefix>//sources.knative.dev/sinkbindings\n    I0223 20:05:08.908020      17 client.go:360] parsed scheme: "endpoint"\n    I0223 20:05:08.908056      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]\n    I0223 20:05:08.930733      17 store.go:1376] Monitoring sinkbindings.sources.knative.dev count at <storage-prefix>//sources.knative.dev/sinkbindings\n    I0223 20:05:08.932408      17 client.go:360] parsed scheme: "endpoint"\n    I0223 20:05:08.932459      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]\n    I0223 20:05:08.942661      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized\n    I0223 20:05:08.946867      17 store.go:1376] Monitoring sinkbindings.sources.knative.dev count at <storage-prefix>//sources.knative.dev/sinkbindings\n    I0223 20:05:08.976732      17 trace.go:205] Trace[417800427]: "Call conversion webhook" custom-resource-definition:sinkbindings.sources.knative.dev,desired-api-version:sources.knative.dev/v1alpha1,object-count:1,UID:4b5243e4-7878-436f-be04-be717cb0f5d2 (23-Feb-2021 20:05:08.902) (total time: 74ms):\n    Trace[417800427]: ---"Request completed" 74ms (20:05:00.976)\n    Trace[417800427]: [74.13198ms] [74.13198ms] END\n    I0223 20:05:08.985668      17 trace.go:205] Trace[154168225]: "Call conversion webhook" custom-resource-definition:subscriptions.messaging.knative.dev,desired-api-version:messaging.knative.dev/v1beta1,object-count:1,UID:ae629e81-0e7d-48f1-acd0-a10d6cfbf71d (23-Feb-2021 20:05:08.894) (total time: 91ms):\n    Trace[154168225]: ---"Request completed" 91ms (20:05:00.985)\n    Trace[154168225]: [91.438968ms] [91.438968ms] END\n    I0223 20:05:08.994436      17 trace.go:205] Trace[584246906]: "Call conversion webhook" custom-resource-definition:sinkbindings.sources.knative.dev,desired-api-version:sources.knative.dev/v1alpha2,object-count:1,UID:113685ab-0a01-4a89-a631-7df924e2a234 (23-Feb-2021 20:05:08.914) (total time: 79ms):\n    Trace[584246906]: ---"Request completed" 79ms (20:05:00.994)\n    Trace[584246906]: [79.431148ms] [79.431148ms] END\n    I0223 20:05:09.018345      17 client.go:360] parsed scheme: "endpoint"\n    I0223 20:05:09.018401      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]\n    I0223 20:05:09.031128      17 store.go:1376] Monitoring triggers.eventing.knative.dev count at <storage-prefix>//eventing.knative.dev/triggers\n    I0223 20:05:09.032798      17 client.go:360] parsed scheme: "endpoint"\n    I0223 20:05:09.032846      17 endpoint.go:68] ccResolverWrapper: sending new addresses to cc: [{https://10.0.137.156:2379  <nil> 0 <nil>} {https://10.0.158.175:2379  <nil> 0 <nil>} {https://10.0.171.12:2379  <nil> 0 <nil>} {https://localhost:2379  <nil> 0 <nil>}]\n    I0223 20:05:09.051739      17 store.go:1376] Monitoring triggers.eventing.knative.dev count at <storage-prefix>//eventing.knative.dev/triggers\n    I0223 20:05:09.061374      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized\n    I0223 20:05:09.077620      17 trace.go:205] Trace[522766072]: "Call conversion webhook" custom-resource-definition:sinkbindings.sources.knative.dev,desired-api-version:sources.knative.dev/v1alpha2,object-count:1,UID:3f02b86e-279b-48f8-86c5-1f991d16c2bf (23-Feb-2021 20:05:08.995) (total time: 82ms):\n    Trace[522766072]: ---"Request completed" 82ms (20:05:00.077)\n    Trace[522766072]: [82.519697ms] [82.519697ms] END\n    I0223 20:05:09.079213      17 trace.go:205] Trace[1177843340]: "Call conversion webhook" custom-resource-definition:sinkbindings.sources.knative.dev,desired-api-version:sources.knative.dev/v1alpha1,object-count:1,UID:03355f47-7e36-4c38-8fac-5d88274d53f2 (23-Feb-2021 20:05:08.993) (total time: 85ms):\n    Trace[1177843340]: ---"Request completed" 85ms (20:05:00.079)\n    Trace[1177843340]: [85.564957ms] [85.564957ms] END\n    I0223 20:05:09.079479      17 trace.go:205] Trace[1358236459]: "Call conversion webhook" custom-resource-definition:sinkbindings.sources.knative.dev,desired-api-version:sources.knative.dev/v1,object-count:1,UID:014eb05c-1142-4ab5-9afb-821a9c656d20 (23-Feb-2021 20:05:08.993) (total time: 85ms):\n    Trace[1358236459]: ---"Request completed" 85ms (20:05:00.079)\n    Trace[1358236459]: [85.687911ms] [85.687911ms] END\n    I0223 20:05:09.080737      17 trace.go:205] Trace[1389066300]: "Call conversion webhook" custom-resource-definition:subscriptions.messaging.knative.dev,desired-api-version:messaging.knative.dev/v1beta1,object-count:1,UID:b21ca313-1b4a-4860-ab13-c36b8ee2d75c (23-Feb-2021 20:05:08.986) (total time: 94ms):\n    Trace[1389066300]: ---"Request completed" 94ms (20:05:00.080)\n    Trace[1389066300]: [94.341421ms] [94.341421ms] END\n    I0223 20:05:09.088080      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized\n    I0223 20:05:09.176930      17 trace.go:205] Trace[499287539]: "Call conversion webhook" custom-resource-definition:sinkbindings.sources.knative.dev,desired-api-version:sources.knative.dev/v1,object-count:1,UID:d5cf8bb5-5d16-4497-8097-5809bd169e69 (23-Feb-2021 20:05:09.088) (total time: 87ms):\n    Trace[499287539]: ---"Request completed" 87ms (20:05:00.176)\n    Trace[499287539]: [87.977259ms] [87.977259ms] END\n    I0223 20:05:09.178693      17 trace.go:205] Trace[632851168]: "Call conversion webhook" custom-resource-definition:triggers.eventing.knative.dev,desired-api-version:eventing.knative.dev/v1beta1,object-count:1,UID:ecd63ff4-facd-4a3c-b782-751b20615f5b (23-Feb-2021 20:05:09.085) (total time: 93ms):\n    Trace[632851168]: ---"Request completed" 92ms (20:05:00.178)\n    Trace[632851168]: [93.051535ms] [93.051535ms] END\n    I0223 20:05:09.179793      17 trace.go:205] Trace[2084183409]: "Call conversion webhook" custom-resource-definition:subscriptions.messaging.knative.dev,desired-api-version:messaging.knative.dev/v1beta1,object-count:1,UID:d5ed3cee-18f2-4dd4-837e-46b164169981 (23-Feb-2021 20:05:09.087) (total time: 92ms):\n    Trace[2084183409]: ---"Request completed" 92ms (20:05:00.179)\n    Trace[2084183409]: [92.490416ms] [92.490416ms] END\n    I0223 20:05:09.182656      17 cacher.go:405] cacher (*unstructured.Unstructured): initialized\n    I0223 20:05:09.183483      17 trace.go:205] Trace[240293913]: "Call conversion webhook" custom-resource-definition:sinkbindings.sources.knative.dev,desired-api-version:sources.knative.dev/v1alpha2,object-count:1,UID:78ee597e-16c1-4a1c-98f2-c73004704dfa (23-Feb-2021 20:05:09.088) (total time: 95ms):\n    Trace[240293913]: ---"Request completed" 95ms (20:05:00.183)\n    Trace[240293913]: [95.411733ms] [95.411733ms] END',
  data3:
    'I0223 20:39:09.342678      17 client.go:360] parsed scheme: "passthrough"\n    I0223 20:39:09.342725      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}\n    I0223 20:39:09.342741      17 clientconn.go:948] ClientConn switching balancer to "pick_first"\n    I0223 20:39:09.342948      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02b047080, {CONNECTING <nil>}\n    I0223 20:39:09.355135      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02b047080, {READY <nil>}\n    I0223 20:39:09.356758      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"\n    I0223 20:39:09.905720      17 client.go:360] parsed scheme: "passthrough"\n    I0223 20:39:09.905783      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}\n    I0223 20:39:09.905801      17 clientconn.go:948] ClientConn switching balancer to "pick_first"\n    I0223 20:39:09.905898      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01d3d8c00, {CONNECTING <nil>}\n    I0223 20:39:09.921266      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc01d3d8c00, {READY <nil>}\n    I0223 20:39:09.924744      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"\n    I0223 20:39:17.533766      17 client.go:360] parsed scheme: "passthrough"\n    I0223 20:39:17.533829      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}\n    I0223 20:39:17.533848      17 clientconn.go:948] ClientConn switching balancer to "pick_first"\n    I0223 20:39:17.534106      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0126046c0, {CONNECTING <nil>}\n    I0223 20:39:17.543548      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc0126046c0, {READY <nil>}\n    I0223 20:39:17.544838      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"\n    I0223 20:39:18.558397      17 client.go:360] parsed scheme: "passthrough"\n    I0223 20:39:18.558470      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}\n    I0223 20:39:18.558488      17 clientconn.go:948] ClientConn switching balancer to "pick_first"\n    I0223 20:39:18.558854      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc020159ca0, {CONNECTING <nil>}\n    I0223 20:39:18.570488      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc020159ca0, {READY <nil>}\n    I0223 20:39:18.571686      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"\n    E0223 20:39:33.145599      17 controller.go:116] loading OpenAPI spec for "v1.admission.work.open-cluster-management.io" failed with: OpenAPI spec does not exist\n    I0223 20:39:33.145632      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.work.open-cluster-management.io: Rate Limited Requeue.\n    E0223 20:39:33.178176      17 controller.go:116] loading OpenAPI spec for "v1beta1.webhook.certmanager.k8s.io" failed with: OpenAPI spec does not exist\n    I0223 20:39:33.178219      17 controller.go:129] OpenAPI AggregationController: action for item v1beta1.webhook.certmanager.k8s.io: Rate Limited Requeue.\n    E0223 20:39:33.196678      17 controller.go:116] loading OpenAPI spec for "v1.admission.hive.openshift.io" failed with: OpenAPI spec does not exist\n    I0223 20:39:33.196719      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.hive.openshift.io: Rate Limited Requeue.\n    E0223 20:39:33.215606      17 controller.go:116] loading OpenAPI spec for "v1.admission.cluster.open-cluster-management.io" failed with: OpenAPI spec does not exist\n    I0223 20:39:33.215640      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.cluster.open-cluster-management.io: Rate Limited Requeue.\n    I0223 20:39:33.815455      17 cacher.go:782] cacher (*core.Pod): 1 objects queued in incoming channel.\n    I0223 20:39:33.815486      17 cacher.go:782] cacher (*core.Pod): 2 objects queued in incoming channel.\n    E0223 20:39:50.321232      17 writers.go:107] apiserver was unable to write a JSON response: http: Handler timeout\n    E0223 20:39:50.321441      17 status.go:71] apiserver received an error that is not an metav1.Status: &errors.errorString{s:"http: Handler timeout"}\n    E0223 20:39:50.322557      17 writers.go:120] apiserver was unable to write a fallback JSON response: http: Handler timeout\n    I0223 20:39:52.263464      17 client.go:360] parsed scheme: "passthrough"\n    I0223 20:39:52.263552      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}\n    I0223 20:39:52.263567      17 clientconn.go:948] ClientConn switching balancer to "pick_first"\n    I0223 20:39:52.263655      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02c6afc90, {CONNECTING <nil>}\n    I0223 20:39:52.274876      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02c6afc90, {READY <nil>}\n    I0223 20:39:52.275771      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"\n    I0223 20:39:52.578122      17 client.go:360] parsed scheme: "passthrough"\n    I0223 20:39:52.578176      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}\n    I0223 20:39:52.578193      17 clientconn.go:948] ClientConn switching balancer to "pick_first"\n    I0223 20:39:52.578497      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02cf76750, {CONNECTING <nil>}\n    I0223 20:39:52.591004      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02cf76750, {READY <nil>}\n    I0223 20:39:52.592632      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"\n    I0223 20:39:54.756286      17 client.go:360] parsed scheme: "passthrough"\n    I0223 20:39:54.756333      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}\n    I0223 20:39:54.756344      17 clientconn.go:948] ClientConn switching balancer to "pick_first"\n    I0223 20:39:54.756414      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc023625960, {CONNECTING <nil>}\n    I0223 20:39:54.767808      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc023625960, {READY <nil>}\n    I0223 20:39:54.769129      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"\n    I0223 20:39:56.404294      17 client.go:360] parsed scheme: "passthrough"\n    I0223 20:39:56.404345      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}\n    I0223 20:39:56.404361      17 clientconn.go:948] ClientConn switching balancer to "pick_first"\n    I0223 20:39:56.404481      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc021f4dcb0, {CONNECTING <nil>}\n    I0223 20:39:56.415138      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc021f4dcb0, {READY <nil>}\n    I0223 20:39:56.416213      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"\n    E0223 20:40:02.220022      17 writers.go:107] apiserver was unable to write a JSON response: http: Handler timeout\n    E0223 20:40:02.220127      17 status.go:71] apiserver received an error that is not an metav1.Status: &errors.errorString{s:"http: Handler timeout"}\n    E0223 20:40:02.221866      17 writers.go:120] apiserver was unable to write a fallback JSON response: http: Handler timeout\n    I0223 20:40:25.339731      17 client.go:360] parsed scheme: "passthrough"\n    I0223 20:40:25.339789      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.158.175:2379  <nil> 0 <nil>}] <nil> <nil>}\n    I0223 20:40:25.339807      17 clientconn.go:948] ClientConn switching balancer to "pick_first"\n    I0223 20:40:25.340129      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc015a709b0, {CONNECTING <nil>}\n    I0223 20:40:25.353181      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc015a709b0, {READY <nil>}\n    I0223 20:40:25.354655      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"\n    I0223 20:40:30.462091      17 client.go:360] parsed scheme: "passthrough"\n    I0223 20:40:30.462135      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.171.12:2379  <nil> 0 <nil>}] <nil> <nil>}\n    I0223 20:40:30.462146      17 clientconn.go:948] ClientConn switching balancer to "pick_first"\n    I0223 20:40:30.462230      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc016332960, {CONNECTING <nil>}\n    I0223 20:40:30.472773      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc016332960, {READY <nil>}\n    I0223 20:40:30.474206      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"\n    E0223 20:40:31.243026      17 writers.go:107] apiserver was unable to write a JSON response: http: Handler timeout\n    E0223 20:40:31.243150      17 status.go:71] apiserver received an error that is not an metav1.Status: &errors.errorString{s:"http: Handler timeout"}\n    E0223 20:40:31.244166      17 writers.go:120] apiserver was unable to write a fallback JSON response: http: Handler timeout\n    E0223 20:40:33.150787      17 controller.go:116] loading OpenAPI spec for "v1.admission.work.open-cluster-management.io" failed with: OpenAPI spec does not exist\n    I0223 20:40:33.150819      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.work.open-cluster-management.io: Rate Limited Requeue.\n    E0223 20:40:33.190190      17 controller.go:116] loading OpenAPI spec for "v1beta1.webhook.certmanager.k8s.io" failed with: OpenAPI spec does not exist\n    I0223 20:40:33.190224      17 controller.go:129] OpenAPI AggregationController: action for item v1beta1.webhook.certmanager.k8s.io: Rate Limited Requeue.\n    E0223 20:40:33.201566      17 controller.go:116] loading OpenAPI spec for "v1.admission.hive.openshift.io" failed with: OpenAPI spec does not exist\n    I0223 20:40:33.201592      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.hive.openshift.io: Rate Limited Requeue.\n    E0223 20:40:33.221136      17 controller.go:116] loading OpenAPI spec for "v1.admission.cluster.open-cluster-management.io" failed with: OpenAPI spec does not exist\n    I0223 20:40:33.221163      17 controller.go:129] OpenAPI AggregationController: action for item v1.admission.cluster.open-cluster-management.io: Rate Limited Requeue.\n    I0223 20:40:36.603974      17 client.go:360] parsed scheme: "passthrough"\n    I0223 20:40:36.604027      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://localhost:2379  <nil> 0 <nil>}] <nil> <nil>}\n    I0223 20:40:36.604042      17 clientconn.go:948] ClientConn switching balancer to "pick_first"\n    I0223 20:40:36.604223      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02aa90b70, {CONNECTING <nil>}\n    I0223 20:40:36.613458      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc02aa90b70, {READY <nil>}\n    I0223 20:40:36.614529      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"\n    I0223 20:40:37.663227      17 client.go:360] parsed scheme: "passthrough"\n    I0223 20:40:37.663281      17 passthrough.go:48] ccResolverWrapper: sending update to cc: {[{https://10.0.137.156:2379  <nil> 0 <nil>}] <nil> <nil>}\n    I0223 20:40:37.663296      17 clientconn.go:948] ClientConn switching balancer to "pick_first"\n    I0223 20:40:37.663389      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc015fa35a0, {CONNECTING <nil>}\n    I0223 20:40:37.676172      17 balancer_conn_wrappers.go:78] pickfirstBalancer: HandleSubConnStateChange: 0xc015fa35a0, {READY <nil>}\n    I0223 20:40:37.677917      17 controlbuf.go:508] transport: loopyWriter.run returning. connection error: desc = "transport is closing"\n    E0223 20:40:40.123848      17 writers.go:64] error encountered while streaming results via websocket: context canceled\n    I0223 20:40:40.123959      17 trace.go:205] Trace[1418061176]: "Get" url:/api/v1/namespaces/openshift-kube-apiserver/pods/kube-apiserver-ip-10-0-171-12.ec2.internal/log,user-agent:Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36,client:76.182.85.204 (23-Feb-2021 20:13:49.846) (total time: 1610277ms):\n    Trace[1418061176]: ---"Transformed response object" 1610268ms (20:40:00.123)\n    Trace[1418061176]: [26m50.277491693s] [26m50.277491693s] END'
};
